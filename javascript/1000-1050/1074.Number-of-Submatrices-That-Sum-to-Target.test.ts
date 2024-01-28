import { numSubmatrixSumTarget } from "./1074.Number-of-Submatrices-That-Sum-to-Target";

describe("1074. Number of Submatrices That Sum to Target", () => {
  it("should return the correct number of submatrices that sum to target", () => {
    const matrix = [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
    ];
    const target = 0;
    expect(numSubmatrixSumTarget(matrix, target)).toBe(4);
  });

  it("should handle negative numbers", () => {
    const matrix = [
      [1, -1],
      [-1, 1],
    ];
    const target = 0;
    expect(numSubmatrixSumTarget(matrix, target)).toBe(5);
  });

  it("should handle a single row matrix", () => {
    const matrix = [[1, 1, 1]];
    const target = 2;
    expect(numSubmatrixSumTarget(matrix, target)).toBe(2);
  });

  it("should handle a single column matrix", () => {
    const matrix = [[904]];
    const target = 0;
    expect(numSubmatrixSumTarget(matrix, target)).toBe(0);
  });
});
