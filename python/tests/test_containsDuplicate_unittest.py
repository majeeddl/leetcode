


import unittest

from arrays.contains_duplicate import Solution


class TestContainsDuplicate(unittest.TestCase,Solution):

    def test_one(self):

        self.assertEqual(self.containsDuplicate([1,2,3,1]), True, "Should be true")

    def test_two(self):

        self.assertEqual(self.containsDuplicate([1,2,3,4]), False, "Should be false")

