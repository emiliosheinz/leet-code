interface NodeInterface<T> {
	value: T;
	left: NodeInterface<T> | null;
	right: NodeInterface<T> | null;
}

interface BinaryTreeInterface<T> {
	root: NodeInterface<T> | null;

	insert(value: T): void;
	find(value: T): NodeInterface<T> | null;
	preorderTraversal(root?: NodeInterface<T> | null): T[];
	inorderTraversal(root?: NodeInterface<T> | null): T[];
	postorderTraversal(root?: NodeInterface<T> | null): T[];
	dfs(value: T, root?: NodeInterface<T> | null): boolean;
	bfs(value: T): boolean;
}

class Node<T> implements NodeInterface<T> {
	public constructor(
		public value: T,
		public left: NodeInterface<T> | null = null,
		public right: NodeInterface<T> | null = null,
	) {}
}

export class BinaryTree<T> implements BinaryTreeInterface<T> {
	public root: NodeInterface<T> | null = null;

	public insert(value: T): void {
		if (!this.root) {
			this.root = new Node(value);
		} else {
			this.recursiveInsert(value, this.root);
		}
	}

	private recursiveInsert(value: T, root: Node<T>): void {
		if (value < root.value) {
			if (root.left) {
				this.recursiveInsert(value, root.left);
			} else {
				root.left = new Node(value);
			}
		} else {
			if (root.right) {
				this.recursiveInsert(value, root.right);
			} else {
				root.right = new Node(value);
			}
		}
	}

	public find(value: T): NodeInterface<T> | null {
		return this.recursiveFind(value, this.root);
	}

	private recursiveFind(value: T, root: Node<T> | null): Node<T> | null {
		if (!root) {
			return null;
		}

		if (value === root.value) {
			return root;
		}

		if (value < root.value) {
			return this.recursiveFind(value, root.left);
		}

		return this.recursiveFind(value, root.right);
	}

	public preorderTraversal(root: NodeInterface<T> | null = this.root): T[] {
		if (!root) {
			return [];
		}

		return [
			root.value,
			...this.preorderTraversal(root.left),
			...this.preorderTraversal(root.right),
		];
	}

	public inorderTraversal(root: NodeInterface<T> | null = this.root): T[] {
		if (!root) {
			return [];
		}

		return [
			...this.inorderTraversal(root.left),
			root.value,
			...this.inorderTraversal(root.right),
		];
	}

	public postorderTraversal(root: NodeInterface<T> | null = this.root): T[] {
		if (!root) {
			return [];
		}

		return [
			...this.postorderTraversal(root.left),
			...this.postorderTraversal(root.right),
			root.value,
		];
	}

	public dfs(value: T, root: NodeInterface<T> | null = this.root): boolean {
		if (!root) return false;
		if (root.value === value) return true;
		return this.dfs(value, root.left) || this.dfs(value, root.right);
	}

	public bfs(value: T): boolean {
		if (!this.root) return false;
		const deque = [];
		deque.push(this.root);
		while (deque.length > 0) {
			const node = deque.shift();
			if (node?.value === value) return true;
			if (node?.left) deque.push(node.left);
			if (node?.right) deque.push(node.right);
		}
    return false
	}
}
