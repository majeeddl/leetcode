export const replaceElements = (arr: number[]): number[] => {
  if (arr.length == 0 || arr.length == 1) return [-1];

  return arr.map((item, index) => {
    const max = Math.max(...arr.slice(index + 1, arr.length));
    return isFinite(max) ? max : -1;
  });

  //   const result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     const max = Math.max(...arr.slice(i + 1, arr.length));

  //     result.push(isFinite(max) ? max : -1);
  //   }

  //   console.log(result);
  //   return result;
};
