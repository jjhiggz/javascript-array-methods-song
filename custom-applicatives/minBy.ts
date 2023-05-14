export const minBy = <T>(
  data: T[],
  callback: (input: T) => string | number
) => {
  let min = data[0];
  for (let el of data) {
    if (callback(el) < callback(min)) {
      min = el;
    }
  }
  return min;
};
