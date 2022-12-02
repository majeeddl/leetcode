


import unittest

from arrays.two_sum import Solution


class TestContainsDuplicate(unittest.TestCase,Solution):

    def test_one(self):

        self.assertEqual(self.twoSum([2, 7, 11, 15],9), [0,1], "Should be [0,1]")

    def test_two(self):

        self.assertEqual(self.twoSum([3,3],6), [0,1], "Should be [0,1]")

