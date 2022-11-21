

import unittest

from etc.basic_calculator import Solution

class TestBasicCalculator(unittest.TestCase,Solution):

    def test_one(self):
        self.assertEqual(self.calculate("1+1"),2,"Should be 2")