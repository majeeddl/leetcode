import { isUgly } from "../../old/math_geometry/uglyNumber";

describe("is ugly", () => {
  it("test one", () => {
    expect(isUgly(6)).toBe(true);
  });

  it("test two", () => {
    expect(isUgly(1)).toBe(true);
  });

  it("test three", () => {
    expect(isUgly(7)).toBe(false);
  });
});
