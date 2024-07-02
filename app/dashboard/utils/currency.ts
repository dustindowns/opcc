export function formatCurrency(value: number) {
  return value > 0 ? '$' + value : '-$' + Math.abs(value);
}
