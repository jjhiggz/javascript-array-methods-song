export function groupBy<T>(
  data: T[],
  callback: (input: T) => string
) {
  let map = new Map<string, T[]>();

  for (let el of data) {
    const key = callback(el);
    const existingData = map.get(key);
    map.set(
      key,
      existingData
        ? [...existingData, el]
        : [el]
    );
  }
  return map;
}
