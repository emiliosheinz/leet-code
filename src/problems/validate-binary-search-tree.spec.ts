import { isValidBST, type TreeNode } from './validate-binary-search-tree';

describe('isValidBST', () => {
  it('should return true for a valid BST', () => {
    const root: TreeNode = {
      val: 2,
      left: { val: 1, left: null, right: null },
      right: { val: 3, left: null, right: null },
    };

    expect(isValidBST(root)).toBe(true);
  });

  it('should return false for an invalid BST', () => {
    const root: TreeNode = {
      val: 5,
      left: { val: 1, left: null, right: null },
      right: { val: 4, left: { val: 3, left: null, right: null }, right: { val: 6, left: null, right: null } },
    };

    expect(isValidBST(root)).toBe(false);
  });

  it('should return true for an empty tree', () => {
    expect(isValidBST(null)).toBe(true);
  });

  it('should return true for a single-node tree', () => {
    const root: TreeNode = { val: 1, left: null, right: null };
    expect(isValidBST(root)).toBe(true);
  });

  it('should return false if all values are equal', () => {
    const root: TreeNode = {
      val: 1,
      left: { val: 1, left: null, right: null },
      right: { val: 1, left: null, right: null },
    };

    expect(isValidBST(root)).toBe(false);
  })
});
