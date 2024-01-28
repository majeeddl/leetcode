import { addTwoNumbers, ListNode } from "./2.Add-Two-Numbers";

describe("Add Two Numbers", () => {
  it("should add two numbers represented by linked lists", () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
    const result = addTwoNumbers(l1, l2);
    expect(result.val).toBe(7);
    expect(result.next.val).toBe(0);
    expect(result.next.next.val).toBe(8);
  });

  it("should handle carry over", () => {
    const l1 = new ListNode(5);
    const l2 = new ListNode(5);
    const result = addTwoNumbers(l1, l2);
    expect(result.val).toBe(0);
    expect(result.next.val).toBe(1);
  });

  it("should handle different list lengths", () => {
    const l1 = new ListNode(1, new ListNode(2));
    const l2 = new ListNode(9, new ListNode(9, new ListNode(9)));
    const result = addTwoNumbers(l1, l2);
    expect(result.val).toBe(0);
    expect(result.next.val).toBe(2);
    expect(result.next.next.val).toBe(0);
    expect(result.next.next.next.val).toBe(1);
  });

  it("should handle zero", () => {
    const l1 = new ListNode(0);
    const l2 = new ListNode(0);
    const result = addTwoNumbers(l1, l2);
    expect(result.val).toBe(0);
  });
});
