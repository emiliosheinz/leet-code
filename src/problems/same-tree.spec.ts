import { isSameTree, type TreeNode } from "./same-tree";

describe("isSameTree", () => {
  test("should return true for two identical trees", () => {
    const tree1: TreeNode = {
      val: 1,
      left: { val: 2, left: null, right: null },
      right: { val: 3, left: null, right: null },
    };
    const tree2: TreeNode = {
      val: 1,
      left: { val: 2, left: null, right: null },
      right: { val: 3, left: null, right: null },
    };
    expect(isSameTree(tree1, tree2)).toBe(true);
  });

  test("should return false for two different trees", () => {
    const tree1: TreeNode = {
      val: 1,
      left: { val: 2, left: null, right: null },
      right: { val: 3, left: null, right: null },
    };
    const tree2: TreeNode = {
      val: 1,
      left: { val: 4, left: null, right: null },
      right: { val: 3, left: null, right: null },
    };
    expect(isSameTree(tree1, tree2)).toBe(false);
  });

  test("should return false when one tree is null", () => {
    const tree1: TreeNode = { val: 1, left: null, right: null };
    const tree2: TreeNode | null = null;
    expect(isSameTree(tree1, tree2)).toBe(false);
  });

  test("should return true when both trees are null", () => {
    const tree1: TreeNode | null = null;
    const tree2: TreeNode | null = null;
    expect(isSameTree(tree1, tree2)).toBe(true);
  });
});
