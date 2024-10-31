export function arrayRange(length: number): Array<number> {
  return Array.from({ length }, (_, i) => i + 1);
}
