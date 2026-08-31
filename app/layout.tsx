import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { THEME_BOOT_SCRIPT } from '@/lib/theme';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'CertGenAI — Luyện thi IIG Certiport GenAI Foundations',
  description: 'Luyện tập 175 câu hỏi GenAI, xem giải thích và theo dõi tiến độ ngay trên thiết bị.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT_SCRIPT }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
