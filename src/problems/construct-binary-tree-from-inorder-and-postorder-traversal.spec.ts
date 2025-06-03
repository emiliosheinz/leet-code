import { buildTree, TreeNode } from './construct-binary-tree-from-inorder-and-postorder-traversal';

describe('buildTree', () => {
  it('should construct a binary tree from inorder and postorder traversals', () => {
    const inorder = [9, 3, 15, 20, 7];
    const postorder = [9, 15, 7, 20, 3];
    const tree = buildTree(inorder, postorder);

    expect(tree).toEqual(
      new TreeNode(
        3,
        new TreeNode(9),
        new TreeNode(
          20,
          new TreeNode(15),
          new TreeNode(7)
        )
      )
    );
  });

  it('should return null for empty traversals', () => {
    const inorder: number[] = [];
    const postorder: number[] = [];
    const tree = buildTree(inorder, postorder);

    expect(tree).toBeNull();
  });
});
