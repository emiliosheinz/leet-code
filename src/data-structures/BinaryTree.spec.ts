import { BinaryTree } from "./BinaryTree";

describe("BinaryTree", () => {
	test("should insert nodes correctly", () => {
		const tree = new BinaryTree<number>();
		tree.insert(10);
		tree.insert(5);
		tree.insert(15);

		expect(tree.root!.value).toBe(10);
		expect(tree.root!.left!.value).toBe(5);
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
});
