import { hasPathSum, type TreeNode } from './path-sum';

describe('hasPathSum', () => {
  test('returns false for null root', () => {
    expect(hasPathSum(null, 10)).toBe(false);
  });

  test('returns true for single node matching targetSum', () => {
    const root: TreeNode = { val: 10, left: null, right: null };
    expect(hasPathSum(root, 10)).toBe(true);
  });

  test('returns false for single node not matching targetSum', () => {
    const root: TreeNode = { val: 5, left: null, right: null };
    expect(hasPathSum(root, 10)).toBe(false);
  });

  test('returns true for valid path sum in tree', () => {
    const root: TreeNode = {
      val: 5,
      left: { val: 4, left: null, right: null },
      right: { val: 8, left: null, right: null },
    };
    expect(hasPathSum(root, 9)).toBe(true); // Path: 5 -> 4
  });

  test('returns false for invalid path sum in tree', () => {
    const root: TreeNode = {
      val: 5,
      left: { val: 4, left: null, right: null },
      right: { val: 8, left: null, right: null },
    };
    expect(hasPathSum(root, 20)).toBe(false);
  });

  test('returns true for negative path sum', () => {
    const root: TreeNode = {
      val: -2,
      left: { val: -3, left: null, right: null },
      right: null,
    };
    expect(hasPathSum(root, -5)).toBe(true);
  })
});
