

import unittest

from arrays.valid_anagram import Solution


class TestValidAnagram(unittest.TestCase,Solution):

    def test_one(self):

        self.assertEqual(self.isAnagram(
            "anagram", "nagaram"), True, "should be true")

    def test_two(self):

        self.assertEqual(self.isAnagram(
            "rat", "car"), False, "should be false")
