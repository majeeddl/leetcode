import { lengthOfLastWord } from "../../old/arrays_hashing/lengthOfLastWord";

describe("find length of last word", () => {
  it("test one", () => {
    expect(lengthOfLastWord("Hello World")).toBe(5);
  });

  it("test two", () => {
    expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4);
  });

  it("test three", () => {
    expect(lengthOfLastWord("luffy is still joyboy")).toBe(6);
  });
});
