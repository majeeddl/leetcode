

import unittest

from arrays.replaceElemWithGreatest import Solution


class TestReplaceWithGreatest(unittest.TestCase, Solution):

    def test_one(self):
        self.assertEqual(self.replaceElements(
            [17, 18, 5, 4, 6, 1]), [18, 6, 6, 6, 1, -1], "there is an error")

    def test_two(self):
        self.assertEqual(self.replaceElements(
            [400]), [ -1], "there is an error")
