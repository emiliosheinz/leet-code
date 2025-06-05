import { BinaryTree } from "./BinaryTree";

describe("BinaryTree", () => {
	test("should insert nodes correctly", () => {
		const tree = new BinaryTree<number>();
		tree.insert(10);
		tree.insert(5);
		tree.insert(15);
		tree.insert(8);

		expect(tree.root!.value).toBe(10);
		expect(tree.root!.left!.value).toBe(5);
		expect(tree.root!.left!.right!.value).toBe(8);
		expect(tree.root!.right!.value).toBe(15);
	});

	test("should find nodes correctly", () => {
		const tree = new BinaryTree<number>();
		tree.insert(10);
		tree.insert(5);
		tree.insert(15);

		expect(tree.find(10)!.value).toBe(10);
		expect(tree.find(5)!.value).toBe(5);
		expect(tree.find(15)!.value).toBe(15);
		expect(tree.find(20)).toBeNull();
	});

	test("should return null for finding in an empty tree", () => {
		const tree = new BinaryTree<number>();
		expect(tree.find(10)).toBeNull();
	});

	describe("preorderTraversal", () => {
		test("should return an empty array for an empty tree", () => {
			const tree = new BinaryTree<number>();
			expect(tree.preorderTraversal()).toEqual([]);
		});

		test("should return the correct preorder traversal", () => {
			const tree = new BinaryTree<number>();
			tree.insert(10);
			tree.insert(5);
			tree.insert(15);
			tree.insert(3);
			tree.insert(7);
			tree.insert(12);
			tree.insert(17);

			expect(tree.preorderTraversal()).toEqual([10, 5, 3, 7, 15, 12, 17]);
		});

		test("should allow starting from an arbitrary node", () => {
			const tree = new BinaryTree<number>();
			tree.insert(10);
			tree.insert(5);
			tree.insert(15);
			tree.insert(3);
			tree.insert(7);
			tree.insert(12);
			tree.insert(17);

			expect(tree.preorderTraversal(tree.root?.left)).toEqual([5, 3, 7]);
		});
	});

	describe("inorderTraversal", () => {
		test("should return an empty array for an empty tree", () => {
			const tree = new BinaryTree<number>();
			expect(tree.inorderTraversal()).toEqual([]);
		});

		test("should return the correct inorder traversal", () => {
			const tree = new BinaryTree<number>();
			tree.insert(10);
			tree.insert(5);
			tree.insert(15);
			tree.insert(3);
			tree.insert(7);
			tree.insert(12);
			tree.insert(17);

			expect(tree.inorderTraversal()).toEqual([3, 5, 7, 10, 12, 15, 17]);
		});

		test("should allow starting from an arbitrary node", () => {
			const tree = new BinaryTree<number>();
			tree.insert(10);
			tree.insert(5);
			tree.insert(15);
			tree.insert(3);
			tree.insert(7);
			tree.insert(12);
			tree.insert(17);

			expect(tree.inorderTraversal(tree.root?.left)).toEqual([3, 5, 7]);
		});
	});

	describe("postorderTraversal", () => {
		test("should return an empty array for an empty tree", () => {
			const tree = new BinaryTree<number>();
			expect(tree.postorderTraversal()).toEqual([]);
		});

		test("should return the correct postorder traversal", () => {
			const tree = new BinaryTree<number>();
			tree.insert(10);
			tree.insert(5);
			tree.insert(15);
			tree.insert(3);
			tree.insert(7);
			tree.insert(12);
			tree.insert(17);

			expect(tree.postorderTraversal()).toEqual([3, 7, 5, 12, 17, 15, 10]);
		});

		test("should allow starting from an arbitrary node", () => {
			const tree = new BinaryTree<number>();
			tree.insert(10);
			tree.insert(5);
			tree.insert(15);
			tree.insert(3);
			tree.insert(7);
			tree.insert(12);
			tree.insert(17);

			expect(tree.postorderTraversal(tree.root?.left)).toEqual([3, 7, 5]);
		});
	});

	describe("dfs", () => {
		const tree = new BinaryTree<number>();
		for (const value of [10, 5, 15, 3, 7, 12, 18]) {
			tree.insert(value);
		}

		test("should return true for a value present in the tree", () => {
			expect(tree.dfs(7)).toBe(true);
			expect(tree.dfs(15)).toBe(true);
		});

		test("should return false for a value not present in the tree", () => {
			expect(tree.dfs(20)).toBe(false);
			expect(tree.dfs(1)).toBe(false);
		});

		test("should return false for an empty tree", () => {
			const emptyTree = new BinaryTree<number>();
			expect(emptyTree.dfs(10)).toBe(false);
		});
	});

	describe("bfs", () => {
		const tree = new BinaryTree<number>();
    for (const value of [10, 5, 15, 3, 7, 12, 18]) {
      tree.insert(value);
    }

    test("should return true for a value present in the tree", () => {
      expect(tree.bfs(7)).toBe(true);
      expect(tree.bfs(15)).toBe(true);
    })

    test("should return false for a value not present in the tree", () => {
      expect(tree.bfs(20)).toBe(false);
      expect(tree.bfs(1)).toBe(false);
    });

    test("should return false for an empty tree", () => {
      const emptyTree = new BinaryTree<number>();
      expect(emptyTree.bfs(10)).toBe(false);
    });
	});
});
