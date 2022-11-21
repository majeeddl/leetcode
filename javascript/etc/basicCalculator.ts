export const calculate = (s: string) => {
  let cur = 0,
    res = 0;

  let sign = 1;

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (!isNaN(parseFloat(char))) {
      cur = cur * 10 + parseInt(char);
    } else if (["+", "-"].includes(char)) {
      res += sign * cur;

      char == "+" ? (sign = 1) : (sign = -1);

      cur = 0;
    } else if (char == "(") {
      stack.push(res, sign);

      sign = 1;

      res = 0;
    } else if (char == ")") {
      res += sign * cur;

      res *= stack.pop();

      res += stack.pop();

      cur = 0;
    }

    
  }

  return res + sign * cur;
};
