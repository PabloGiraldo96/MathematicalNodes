export function pathsEqual(a: number[], b: number[]): boolean {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

/** True if `prefix` is `full` itself or an ancestor path of it. */
export function isPrefix(prefix: number[], full: number[]): boolean {
  return prefix.length <= full.length && prefix.every((v, i) => v === full[i]);
}
