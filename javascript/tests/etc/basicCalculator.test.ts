import { calculate } from "../../old/etc/basicCalculator";

describe("basic calculator tests", () => {
  it("test one", () => {
    expect(calculate("1 + 1")).toBe(2);
  });
  it("test two", () => {
    expect(calculate(" 2-1 + 2 ")).toBe(3);
  });
  it("test three", () => {
    expect(calculate("(1+(4+5+2)-3)+(6+8)")).toBe(23);
  });
});
