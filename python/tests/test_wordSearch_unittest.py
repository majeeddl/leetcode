

import unittest


from backtracking.word_search import Solution


class TestWordSearch(unittest.TestCase, Solution):

    def test_one(self):
        self.assertEqual(self.exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], [
                         "A", "D", "E", "E"]], "ABCCED"), True, "Should be true")

    def test_two(self):
        self.assertEqual(self.exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], [
                         "A", "D", "E", "E"]], "SEE"), True, "Should be true")

    def test_three(self):
        self.assertEqual(self.exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], [
                         "A", "D", "E", "E"]], "ABCB"), False, "Should be false")

    def test_four(self):
        self.assertEqual(self.exist([["A", "A", "A", "A", "A", "A"], ["A", "A", "A", "A", "A", "A"], ["A", "A", "A", "A", "A", "A"], [
                         "A", "A", "A", "A", "A", "A"], ["A", "A", "A", "A", "A", "A"], ["A", "A", "A", "A", "A", "A"]], "AAAAAAAAAAAABAA"), False, "Should be false")
