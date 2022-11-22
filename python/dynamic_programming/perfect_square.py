

class Solution:
    def numSquares(self, n: int) -> int:

        dp = [i for i in range(n+1)]

        # dp[0] = 0

        # for target in range(n+1):

        #     # j = 1

        #     # while j*j <= target:
        #     #     dp[target] = min(dp[target], dp[target-(j*j)]+1)
        #     #     j += 1
        #     for s in range(1, target+1):
        #         square = s*s

        #         if target <= square:
        #             break

        #         dp[target] = min(dp[target], dp[target-square] +1)

        # m = dp

        # return dp[-1]

        for i in range(n+1):

            j = 1

            while j*j <= i:
                dp[i] = min(dp[i], dp[i-(j*j)]+1)
                j += 1

        return dp[-1]
