

import unittest
from app import sum

class TestSum(unittest.TestCase):
    

    def test_sum(self):
        self.assertEqual(sum(1,2),3,"Should be equal 3")