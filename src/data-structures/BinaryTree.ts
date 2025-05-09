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

	private recursiveInsert(value: T, node: Node<T>): void {
		if (value < node.value) {
			if (node.left) {
				this.recursiveInsert(value, node.left);
			} else {
				node.left = new Node(value);
			}
		} else {
			if (node.right) {
				this.recursiveInsert(value, node.right);
			} else {
				node.right = new Node(value);
			}
		}
	}

	public find(value: T): NodeInterface<T> | null {
		return this.recursiveFind(value, this.root);
	}

	private recursiveFind(value: T, node: Node<T> | null): Node<T> | null {
		if (!node) {
			return null;
		}

		if (value === node.value) {
			return node;
		}

		if (value < node.value) {
			return this.recursiveFind(value, node.left);
		}

		return this.recursiveFind(value, node.right);
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
}
