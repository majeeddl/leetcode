class Solution:

    def longestCommonPrefix(self, strs: list[str])-> str :


        minLength = len(min(strs , key=len))

        print(minLength)

        i = 0

        result = ""

        while i < minLength :

            w = strs[0][i]

            for word in strs:
                if word[i] != w :
                    w = ""
            
            if w == "":
                break


            result += w

            i+=1

        return result
            
