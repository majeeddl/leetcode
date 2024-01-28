import { isAnagram } from "../../old/arrays_hashing/valid_anagram";

describe("Valid anagram tests", () => {
  it("test one", () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
  });

  it("test two", () => {
    expect(isAnagram("rat", "car")).toBe(false);
  });
});
