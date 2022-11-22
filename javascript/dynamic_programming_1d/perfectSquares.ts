export const numSquares = (n: number): number => {
  const maxLength = Math.ceil(Math.sqrt(n));

  const squareLengths = new Array(maxLength)
    .fill(0)
    .map((v, index) => (index + 1) ** 2);

  console.log(squareLengths);
  const memo = {};
  const aux = (index, sum) => {
    memo[index] = memo[index] || {};
    if (memo[index][sum] !== undefined) {
      return memo[index][sum];
    }
    if (sum === n) {
      return 0;
    }
    if (sum > n || index > squareLengths.length - 1) {
      return Infinity;
    }
    memo[index][sum] = Math.min(
      aux(index, sum + squareLengths[index]) + 1,
      aux(index + 1, sum)
    );
    console.log("memo" , memo)
    return memo[index][sum];
  };
  return aux(0, 0);
};
