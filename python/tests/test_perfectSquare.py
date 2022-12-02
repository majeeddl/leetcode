

import unittest

from dynamic_programming.perfect_square import Solution


class TestBasicCalculator(unittest.TestCase, Solution):

    def test_one(self):
        self.assertEqual(self.numSquares(12), 3, "Should be 3")

    def test_two(self):
        self.assertEqual(self.numSquares(13), 2, "Should be 2")
