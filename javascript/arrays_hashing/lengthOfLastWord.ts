export const lengthOfLastWord = (s: string) => {
//   let i = s.length - 1,
//     length = 0;

//   while (s[i] == " ") {
//     i--;
//   }

//   while (i >= 0 && s[i] != " ") {
//     length++;
//     i--;
//   }

//   return length; // 107ms

    const result = s.trim().split(" ");

    return result[result.length - 1].length; // 77ms

};
