import { twoSum } from "./1.Two-Sum";

describe("Two Sum", () => {
  it("should return indices of two numbers such that they add up to target", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });

  it("should return [-1, -1] if no two numbers sum to target", () => {
    const nums = [1, 2, 3, 4];
    const target = 10;
    expect(twoSum(nums, target)).toEqual([-1, -1]);
  });

  it("should handle negative numbers", () => {
    const nums = [-1, -2, -3, -4, -5];
    const target = -8;
    expect(twoSum(nums, target)).toEqual([2, 4]);
  });
});
