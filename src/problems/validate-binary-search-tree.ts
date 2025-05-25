export type TreeNode = {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
};

export function isValidBST(root: TreeNode | null): boolean {
  let prev: number | null = null;
 
  const inorderCheck = (node: TreeNode | null): boolean => {
    if(!node) return true;

    if(!inorderCheck(node.left)) return false; 

    if(prev !== null && node.val <= prev) return false;
    prev = node.val;

    return inorderCheck(node.right)
  }

  return inorderCheck(root);
}

// Another approach using inorder traversal to collect values and then check if they are sorted:
//
// export function isValidBST(root: TreeNode | null): boolean {
//   const values = inorderTraversal(root);
//
//   for (let i = 1; i < values.length; i++) {
//     const previous = values[i-1];
//     const current = values[i];
//     if(previous >= current) return false;
//   }
//
//   return true;
// }
//
// function inorderTraversal(node: TreeNode | null): number[] {
//   if (!node) return [];
//
//   return [
//     ...inorderTraversal(node.left),
//     node.val,
//     ...inorderTraversal(node.right),
//   ];
// }
