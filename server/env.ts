/**
 * Binding của Worker. `ASSETS` do cấu hình `assets.binding` trong
 * wrangler.jsonc tạo ra — Worker dùng nó khi cần đọc file tĩnh đã build.
 */
export type Env = {
  Bindings: {
    ASSETS: Fetcher;
  };
};
