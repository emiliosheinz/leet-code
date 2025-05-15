export type TreeNode = {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
};

export function maxDepth(root: TreeNode | null): number {
  if(!root) return 0;

  const leftDepth = maxDepth(root.left);
  const rightDeth = maxDepth(root.right);

  return Math.max(leftDepth, rightDeth) + 1;
}

