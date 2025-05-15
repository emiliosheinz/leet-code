import { maxDepth, type TreeNode } from "./maximum-depth-of-binary-tree";

describe("maxDepth", () => {
  it("should return 0 for an empty tree", () => {
    expect(maxDepth(null)).toBe(0);
  });

  it("should return 1 for a tree with only one node", () => {
    const root: TreeNode = { val: 1, left: null, right: null };
    expect(maxDepth(root)).toBe(1);
  });

  it("should return the correct depth for a balanced tree", () => {
    const root: TreeNode = {
      val: 1,
      left: { val: 2, left: null, right: null },
      right: { val: 3, left: null, right: null },
    };
    expect(maxDepth(root)).toBe(2);
  });

  it("should return the correct depth for an unbalanced tree", () => {
    const root: TreeNode = {
      val: 1,
      left: { val: 2, left: { val: 3, left: null, right: null }, right: null },
      right: { val: 5, left: null, right: null },
    };
    expect(maxDepth(root)).toBe(3);
  });
});
