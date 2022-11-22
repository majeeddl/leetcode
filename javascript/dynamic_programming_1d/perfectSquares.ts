export const numSquares = (n: number): number => {
  // const maxLength = Math.ceil(Math.sqrt(n));

  // const squareLengths = new Array(maxLength)
  //   .fill(0)
  //   .map((v, index) => (index + 1) ** 2);

  // console.log(squareLengths);
  // const memo = {};
  // const aux = (index, sum) => {
  //   memo[index] = memo[index] || {};
  //   if (memo[index][sum] !== undefined) {
  //     return memo[index][sum];
  //   }
  //   if (sum === n) {
  //     return 0;
  //   }
  //   if (sum > n || index > squareLengths.length - 1) {
  //     return Infinity;
  //   }
  //   memo[index][sum] = Math.min(
  //     aux(index, sum + squareLengths[index]) + 1,
  //     aux(index + 1, sum)
  //   );
  //   console.log("memo" , memo)
  //   return memo[index][sum];
  // };
  // return aux(0, 0);

  const dp = new Array(n + 1).fill(0).map((item,index)=> index );

  console.log(dp);
  for (let i = 0; i < n + 1; i++) {
    let j = 1;
    while (j * j <= i) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
      j++;
    }
  }

  console.log(dp);

  return dp[dp.length - 1];
};
