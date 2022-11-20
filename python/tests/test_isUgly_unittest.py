


import unittest

from math_geometry.ugly_number import Solution


class TestContainsDuplicate(unittest.TestCase,Solution):

    def test_one(self):
        self.assertEqual(self.isUgly(6), True, "Should be true")

    def test_two(self):
        self.assertEqual(self.isUgly(1), True, "Should be true")

    def test_three(self):
        self.assertEqual(self.isUgly(14), False, "Should be false")
