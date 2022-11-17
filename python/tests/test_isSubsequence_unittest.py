

import unittest

from arrays.is_subsequence import Solution


class TestIsSubsequence(unittest.TestCase, Solution):

    def test_one(self):
        self.assertEqual(self.isSubsequence(
            "abc", "ahbgdc"), True, "Should be true")

    def test_two(self):
        self.assertEqual(self.isSubsequence(
            "axc",
            "ahbgdc"), False, "Should be false")
