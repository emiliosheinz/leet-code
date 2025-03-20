class Node<T> {
	public constructor(
		public value: T,
		public left: Node<T> | null = null,
		public right: Node<T> | null = null,
	) {}
}

export class BinaryTree<T> {
	public root: Node<T> | null = null;

	public insert(value: T) {
		if (!this.root) {
			this.root = new Node(value);
		} else {
			this.recursiveInsert(value, this.root);
		}
	}

	private recursiveInsert(value: T, node: Node<T>) {
		if (value < node.value) {
			if (!node.left) {
				node.left = new Node(value);
			} else {
				this.recursiveInsert(value, node.left);
			}
		} else {
			if (!node.right) {
				node.right = new Node(value);
			} else {
				this.recursiveInsert(value, node.right);
			}
		}
	}

	public find(value: T) {
		return this.recursiveFind(value, this.root);
	}

	private recursiveFind(value: T, node: Node<T> | null): Node<T> | null {
		if (!node) {
			return null;
		}

		if (node.value === value) {
			return node;
		}

		if (value < node.value) {
			return this.recursiveFind(value, node.left);
		}

		return this.recursiveFind(value, node.right);
	}

	public preorderTraversal(root: Node<T> | null = this.root): T[] {
		if (!root) {
			return [];
		}

		return [
			root.value,
			...this.preorderTraversal(root.left),
			...this.preorderTraversal(root.right),
		];
	}

	public inorderTraversal(root: Node<T> | null = this.root): T[] {
		if (!root) {
			return [];
		}

		return [
			...this.inorderTraversal(root.left),
			root.value,
			...this.inorderTraversal(root.right),
		];
	}

	public postorderTraversal(root: Node<T> | null = this.root): T[] {
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
