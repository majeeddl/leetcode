export const longestCommonPrefix = (strs: string[]): string => {
  const len = strs.reduce((acc: number, cur: string) => {
    return Math.min(cur.length, acc);
  }, strs[0].length);

  let i = 0;

  let result = "";

  while (i < len) {
    const word = strs.reduce((acc, cur) => {
      if (acc == cur[i]) {
        return cur[i];
      }
      return "";
    }, strs[0][i]);

    if (word) {
      result += word;
    } else {
      break;
    }

    i++;
  }

  return result;
};
