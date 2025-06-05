export class _Node {
	val: number;
	neighbors: _Node[];

	constructor(val?: number, neighbors?: _Node[]) {
		this.val = val === undefined ? 0 : val;
		this.neighbors = neighbors === undefined ? [] : neighbors;
	}
}

export function cloneGraph(node: _Node | null): _Node | null {
	if (!node) return null;
	const deque = [node];
	const clones = { [node.val]: new _Node(node.val, []) };
	while (deque.length > 0) {
		const current = deque.shift();
		const currentClone = clones[current!.val];
		for (const n of current!.neighbors) {
			if (!clones[n.val]) {
				clones[n.val] = new _Node(n.val, []);
				deque.push(n);
			}
			currentClone.neighbors.push(clones[n.val]);
		}
	}
	return clones[node.val];
}
