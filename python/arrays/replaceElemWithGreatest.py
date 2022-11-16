
class Solution:
    def replaceElements(self, arr: list[int],) -> list[int]:
        rightMax = -1

        for i in range(len(arr)-1, -1, -1):
            print(i)
            newMax = max(rightMax, arr[i])
            arr[i] = rightMax
            rightMax = newMax

        return arr
