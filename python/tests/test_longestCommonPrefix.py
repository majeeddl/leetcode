

import unittest

from arrays.longestCommonPerfix import Solution


class TestBasicCalculator(unittest.TestCase, Solution):

    def test_one(self):
        self.assertEqual(self.longestCommonPrefix(
            ["flower", "flow", "flight"]), "fl", "Should be fl")

    def test_two(self):
        self.assertEqual(self.longestCommonPrefix(
            ["dog", "racecar", "car"]), "", "Should be ''")

    def test_three(self):
        self.assertEqual(self.longestCommonPrefix(
            ["cir", "car"]), "c", "Should be c")
