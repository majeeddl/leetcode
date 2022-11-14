


class Solution:
    def containsDuplicate(self,nums : list[int]) -> bool:
        
        hashSet = set()

        for n in nums:
            if n in hashSet:
                return True
            hashSet.add(n)
        return False