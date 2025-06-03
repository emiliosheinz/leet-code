export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (!inorder?.length || !postorder?.length) return null;
  const root = new TreeNode(postorder.pop());
  const inorderRootIndex = inorder.indexOf(root.val);
  root.right = buildTree(inorder.slice(inorderRootIndex + 1), postorder);
  root.left = buildTree(inorder.slice(0, inorderRootIndex), postorder);
  return root;
}
