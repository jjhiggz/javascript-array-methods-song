export const maxBy = <T>(
  data: T[],
  callback: (input: T) => string | number
) => {
  let max = data[0];
  for (let el of data) {
    if (callback(el) > callback(max)) {
      max = el;
    }
  }
  return max;
};
