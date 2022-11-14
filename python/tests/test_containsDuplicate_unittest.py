


import unittest

from arrays.contains_duplicate import Solution


class TestContainsDuplicate(unittest.TestCase):

    def test_one(self):
        solution = Solution()

        self.assertEqual(solution.containsDuplicate([1,2,3,1]), True, "Should be true")

    def test_two(self):
        solution = Solution()

        self.assertEqual(solution.containsDuplicate([1,2,3,4]), False, "Should be false")

