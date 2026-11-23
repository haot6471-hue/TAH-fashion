/** 459000 -> "459.000₫" */
export function formatVnd(n: number): string {
  return Math.round(n).toLocaleString("vi-VN") + "₫";
}
