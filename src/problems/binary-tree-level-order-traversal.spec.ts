import { levelOrder, type TreeNode } from './binary-tree-level-order-traversal';

describe('levelOrder', () => {
  it('should return an empty array for a null root', () => {
    expect(levelOrder(null)).toEqual([]);
  });

  it('should return correct level order traversal for a single node', () => {
    const root: TreeNode = { val: 1, left: null, right: null };
    expect(levelOrder(root)).toEqual([[1]]);
  });

  it('should return correct level order traversal for a complete binary tree', () => {
    const root: TreeNode = {
      val: 1,
      left: { val: 2, left: null, right: null },
      right: { val: 3, left: null, right: null },
    };
    expect(levelOrder(root)).toEqual([[1], [2, 3]]);
  });

  it('should return correct level order traversal for an unbalanced binary tree', () => {
    const root: TreeNode = {
      val: 1,
      left: { val: 2, left: { val: 4, left: null, right: null }, right: null },
      right: { val: 3, left: null, right: null },
    };
    expect(levelOrder(root)).toEqual([[1], [2, 3], [4]]);
  });

  it('should handle a tree with multiple levels', () => {
    const root: TreeNode = {
      val: 1,
      left: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: { val: 5, left: null, right: null },
      },
      right: {
        val: 3,
        left: { val: 6, left: null, right: null },
        right: { val: 7, left: null, right: null },
      },
    };
    expect(levelOrder(root)).toEqual([[1], [2, 3], [4, 5, 6, 7]]);
  });
});
