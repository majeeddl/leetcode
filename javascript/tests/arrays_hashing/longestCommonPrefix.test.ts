import { longestCommonPrefix } from "../../old/arrays_hashing/longestCommonPrefix";

describe("Longest Common Prefix", () => {
  it("test one", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  });
  it("test two", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  });

  it("test three", () => {
    expect(longestCommonPrefix(["cir", "car"])).toBe("c");
  });
});
