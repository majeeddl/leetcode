

import unittest

from arrays.length_of_last_word import Solution


class TestIsSubsequence(unittest.TestCase, Solution):

    def test_one(self):
        self.assertEqual(self.lengthOfLastWord(
            "Hello World"), 5, "Should be 5")

    def test_two(self):
        self.assertEqual(self.lengthOfLastWord(
            "   fly me   to   the moon  "), 4, "Should be 4")

    def test_three(self):
        self.assertEqual(self.lengthOfLastWord(
            "luffy is still joyboy"), 6, "Should be 6")
