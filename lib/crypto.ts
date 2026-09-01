/**
 * Cryptographic Engine for GenAI Quiz
 * Implements AES-GCM 256-bit encryption and Zero-Cleartext Answer Verification via Web Crypto API & Sync SHA-256.
 */

// Multi-part obfuscated salt and seed to prevent simple static string extraction
const SEED_PARTS = ["GenAI", "Quiz", "2026", "ZeroTrust", "IIG", "CertSec"];
const APP_SALT = "iig-genai-cert-quiz-salt-v2";

export function getAppSecret(): string {
  return SEED_PARTS.join("::") + "@" + APP_SALT;
}

/**
 * Pure JavaScript synchronous SHA-256 implementation
 * Guarantees identical output to crypto.subtle and Node.js crypto.createHash('sha256')
 */
export function sha256Sync(inputStr: string): string {
  function rightRotate(value: number, amount: number) {
    return (value >>> amount) | (value << (32 - amount));
  }

  const maxWord = 4294967296; // 2^32
  // Thuật toán bên dưới chỉ xử lý byte 0-255, nên phải chuyển sang UTF-8 trước.
  // Không có bước này, mọi chuỗi có dấu tiếng Việt sẽ trả về "" và bị chấm sai.
  let ascii = utf8Bytes(inputStr);
  let i = 0;
  let j = 0;
  let result = "";

  const words: number[] = [];
  const asciiBitLength = ascii.length * 8;

  let hash: number[] = [];
  const k: number[] = [];
  let primeCounter = 0;

  const isComposite: Record<number, boolean> = {};
  for (let candidate = 2; primeCounter < 64; candidate++) {
    if (!isComposite[candidate]) {
      for (i = 0; i < 313; i += candidate) {
        isComposite[i] = true;
      }
      hash[primeCounter] = (Math.pow(candidate, 0.5) * maxWord) | 0;
      k[primeCounter++] = (Math.pow(candidate, 1 / 3) * maxWord) | 0;
    }
  }

  ascii += "\x80";
  while ((ascii.length % 64) - 56) ascii += "\x00";
  for (i = 0; i < ascii.length; i++) {
    j = ascii.charCodeAt(i);
    if (j >> 8) return ""; // non-ascii fallback
    words[i >> 2] |= j << ((3 - (i % 4)) * 8);
  }
  words[words.length] = (asciiBitLength / maxWord) | 0;
  words[words.length] = asciiBitLength;

  for (j = 0; j < words.length; ) {
    const w = words.slice(j, (j += 16));
    const oldHash = hash;
    hash = hash.slice(0, 8);

    for (i = 0; i < 64; i++) {
      const w15 = w[i - 15];
      const w2 = w[i - 2];

      const s0 = rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3);
      const s1 = rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10);
      const ch = (hash[4] & hash[5]) ^ (~hash[4] & hash[6]);
      const maj = (hash[0] & hash[1]) ^ (hash[0] & hash[2]) ^ (hash[1] & hash[2]);
      const temp1 =
        hash[7] +
        (rightRotate(hash[4], 6) ^ rightRotate(hash[4], 11) ^ rightRotate(hash[4], 25)) +
        ch +
        k[i] +
        (w[i] =
          i < 16
            ? w[i]
            : (w[i - 16] + s0 + w[i - 7] + s1) | 0);
      const temp2 =
        (rightRotate(hash[0], 2) ^ rightRotate(hash[0], 13) ^ rightRotate(hash[0], 22)) +
        maj;

      hash = [(temp1 + temp2) | 0].concat(hash);
      hash[4] = (hash[4] + temp1) | 0;
    }

    for (i = 0; i < 8; i++) {
      hash[i] = (hash[i] + oldHash[i]) | 0;
    }
  }

  for (i = 0; i < 8; i++) {
    for (let b = 3; b >= 0; b--) {
      const byte = (hash[i] >> (b * 8)) & 255;
      result += (byte < 16 ? "0" : "") + byte.toString(16);
    }
  }
  return result;
}

/**
 * Chuyển chuỗi UTF-16 của JS thành chuỗi byte UTF-8 (mỗi ký tự là 1 byte 0-255),
 * để kết quả băm khớp với crypto.createHash('sha256').update(str, 'utf8') của Node.
 */
function utf8Bytes(input: string): string {
  const bytes = new TextEncoder().encode(input);
  let out = "";
  for (let i = 0; i < bytes.length; i++) out += String.fromCharCode(bytes[i]);
  return out;
}

/**
 * Standardize answer for hashing
 */
export function canonicalizeAnswer(answer: unknown): string {
  if (typeof answer === "string") return answer.trim();
  if (Array.isArray(answer)) {
    return [...answer].map((item) => String(item).trim()).sort().join("|");
  }
  if (typeof answer === "object" && answer !== null) {
    const entries = Object.entries(answer as Record<string, string>)
      .map(([k, v]) => `${k}:${String(v).trim()}`)
      .sort();
    return entries.join(";");
  }
  return "";
}

/**
 * Compute HMAC-SHA256 signature for answer verification synchronously
 */
export function computeAnswerSignatureSync(questionId: string, answer: unknown): string {
  const canonical = canonicalizeAnswer(answer);
  const rawInput = `q:${questionId}::ans:${canonical}::salt:${APP_SALT}`;
  return sha256Sync(rawInput);
}

/**
 * Derive an AES-GCM CryptoKey from a secret passphrase using PBKDF2
 */
const keyCache = new Map<string, Promise<CryptoKey>>();

export async function deriveKey(secret: string, salt: string = APP_SALT): Promise<CryptoKey> {
  const cacheKey = `${salt}\u0000${secret}`;
  const cached = keyCache.get(cacheKey);
  if (cached) return cached;

  const derived = deriveKeyUncached(secret, salt);
  keyCache.set(cacheKey, derived);
  // Không giữ lại lời hứa đã lỗi, nếu không mọi lần gọi sau đều lỗi theo.
  derived.catch(() => keyCache.delete(cacheKey));
  return derived;
}

async function deriveKeyUncached(secret: string, salt: string): Promise<CryptoKey> {
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "PBKDF2" },
    false,
    ["deriveKey"]
  );

  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: enc.encode(salt),
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

/**
 * Encrypt a plaintext string or object with AES-GCM
 * Returns base64 string: IV (12 bytes) + Ciphertext + Tag (16 bytes)
 */
export async function encryptPayload(data: unknown, secret: string = getAppSecret()): Promise<string> {
  const jsonStr = typeof data === "string" ? data : JSON.stringify(data);
  const enc = new TextEncoder();
  const key = await deriveKey(secret);
  const iv = crypto.getRandomValues(new Uint8Array(12));

  const cipherBuffer = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    enc.encode(jsonStr)
  );

  const combined = new Uint8Array(iv.byteLength + cipherBuffer.byteLength);
  combined.set(iv, 0);
  combined.set(new Uint8Array(cipherBuffer), iv.byteLength);

  let binary = "";
  for (let idx = 0; idx < combined.length; idx++) {
    binary += String.fromCharCode(combined[idx]);
  }
  return btoa(binary);
}

/**
 * Decrypt an AES-GCM base64 payload
 */
export async function decryptPayload<T = unknown>(encryptedBase64: string, secret: string = getAppSecret()): Promise<T> {
  const binary = atob(encryptedBase64);
  const combined = new Uint8Array(binary.length);
  for (let idx = 0; idx < binary.length; idx++) {
    combined[idx] = binary.charCodeAt(idx);
  }

  const iv = combined.slice(0, 12);
  const cipherData = combined.slice(12);

  const key = await deriveKey(secret);
  const decryptedBuffer = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    key,
    cipherData
  );

  const dec = new TextDecoder();
  const jsonStr = dec.decode(decryptedBuffer);
  try {
    return JSON.parse(jsonStr) as T;
  } catch {
    return jsonStr as unknown as T;
  }
}
