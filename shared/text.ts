/** Bỏ dấu tiếng Việt để so khớp tìm kiếm không phụ thuộc dấu và chữ hoa/thường. */
export function foldText(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'd')
    .toLowerCase();
}
