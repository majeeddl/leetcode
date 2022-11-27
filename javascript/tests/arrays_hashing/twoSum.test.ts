import { twoSum } from './../../arrays_hashing/twoSum';


describe("contains duplicate", () => {
  it("test one", () => {
    expect(twoSum([2, 7, 11, 15],9)).toEqual([0,1]);
  });

  it("test two", () => {
    expect(twoSum([3,2,4], 6)).toEqual([1, 2]);
  });

  it("test three", () => {
    expect(twoSum([3, 3], 6)).toEqual([0,1]);
  });
});