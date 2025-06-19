import { KthLargest } from "./kth-largest-element-in-a-stream";

describe("KthLargest", () => {
  it("should handle the first example correctly", () => {
    const kthLargest = new KthLargest(3, [4, 5, 8, 2]);

    expect(kthLargest.add(3)).toBe(4);
    expect(kthLargest.add(5)).toBe(5);
    expect(kthLargest.add(10)).toBe(5);
    expect(kthLargest.add(9)).toBe(8);
    expect(kthLargest.add(4)).toBe(8);
  });

  it("should handle the second example correctly", () => {
    const kthLargest = new KthLargest(4, [7, 7, 7, 7, 8, 3]);

    expect(kthLargest.add(2)).toBe(7);
    expect(kthLargest.add(10)).toBe(7);
    expect(kthLargest.add(9)).toBe(7);
    expect(kthLargest.add(9)).toBe(8);
  });

  it("should work with an empty initial array", () => {
    const kthLargest = new KthLargest(1, []);
    expect(kthLargest.add(5)).toBe(5);
    expect(kthLargest.add(10)).toBe(10);
    expect(kthLargest.add(-2)).toBe(10);
  });

  it("should handle negative numbers correctly", () => {
    const kthLargest = new KthLargest(2, [-10, -7, -3]);
    expect(kthLargest.add(-8)).toBe(-7);
    expect(kthLargest.add(-2)).toBe(-3);
    expect(kthLargest.add(-1)).toBe(-2);
  });
});
