
### o ( n * m * dfs)
### dfs => 4 ^ n

from collections import Counter
from itertools import chain


class Solution:
    def exist(self, board : list[list[str]] , word : str) -> bool:

        # ROWS, COLS = len( board), len(board[0])

        # path = set();

        # def dfs(r,c,i):
            
        #     if i== len(word):
        #         return True
            
        #     if ( 
        #             r < 0 or
        #             c < 0 or
        #             r >= ROWS or
        #             c >= COLS or
        #             word[i] != board[r][c] or
        #             (r,c) in path
        #         ):
        #         return False
            
        #     path.add((r,c))

        #     res = (
        #         dfs(r+1,c,i+1) or
        #         dfs(r-1,c,i+1) or
        #         dfs(r,c+1,i+1) or
        #         dfs(r,c-1,i+1) 
        #     )

        #     path.remove((r,c))

        #     return res
        
        # for r in range(ROWS):
        #     for c in range(COLS):
        #         if dfs(r,c,0): 
        #             return True
        
        # return False

        row, col = len(board), len(board[0])
        R, C, seen = range(row), range(col), set()

        def dfs(coord, i=0):
            
            if len(word) == i: return True
            
            r,c = coord

            if (r not in R or c not in C or 
                coord in seen            or 
                board[r][c] != word[i]): return False
            
            seen.add(coord)

            res = (dfs((r+1,c), i+1) or dfs((r,c+1), i+1) or
                   dfs((r-1,c), i+1) or dfs((r,c-1), i+1))
            
            seen.remove(coord)

            return res

        boardCt, wrdCt = Counter(chain(*board)), Counter(word)
        if any (boardCt[ch] < wrdCt[ch] for ch in wrdCt): return False

        if boardCt[word[0]] > boardCt[word[-1]]: word = word[::-1]
        
        return any(dfs((r, c))  for c in C for r in R)