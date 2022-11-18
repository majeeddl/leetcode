export const lengthOfLastWord = (s: string) => {
  let i = s.length - 1,
    length = 0;

  while (s[i] == " ") {
    i--;
  }

  while (i >= 0 && s[i] != " ") {
    length++;
    i--;
  }

  return length;

  //   const result = s.trim().split(" ");

  //   const lastWord = result[result.length - 1];

  //   return lastWord.length;
};
