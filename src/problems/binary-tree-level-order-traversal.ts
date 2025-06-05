export type TreeNode = {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
};

export function levelOrder(root: TreeNode | null): number[][] {
	if (!root) return [];
	const result: number[][] = [];
	let currentLevel = 0;
	let nextLevelNodes: TreeNode[] = [];
	let currentLevelNodes: TreeNode[] = [root];
	while (currentLevelNodes.length > 0) {
		const node = currentLevelNodes.shift();
		if (!result[currentLevel]) result[currentLevel] = [];
		result[currentLevel].push(node!.val);
		if (node?.left) nextLevelNodes.push(node.left);
		if (node?.right) nextLevelNodes.push(node.right);
		if (currentLevelNodes.length !== 0) continue;
		currentLevel++;
		currentLevelNodes = nextLevelNodes;
		nextLevelNodes = [];
	}
	return result;
}
