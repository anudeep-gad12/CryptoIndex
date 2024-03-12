export function debounce(
  fn: (...args: any[]) => void,
  delay: number = 1000
): (...args: any[]) => void {
  let timeout: NodeJS.Timeout;
  return function (...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
