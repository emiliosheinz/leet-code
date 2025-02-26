import { DoublyLinkedList } from "./DoublyLinkedList";

describe("DoublyLinkedList", () => {
	test("initializes with null head and tail and no size", () => {
		const list = new DoublyLinkedList();
		expect(list.head).toBeNull();
		expect(list.tail).toBeNull();
		expect(list.size).toEqual(0);
	});

	describe("addToHead", () => {
		test("sets the new node as head and tail", () => {
			const list = new DoublyLinkedList<number>();

			list.addToHead(1);

			expect(list.head?.value).toEqual(1);
			expect(list.tail?.value).toEqual(1);
		});

		test("increases the size of the list", () => {
			const list = new DoublyLinkedList<number>();

			list.addToHead(1);
			expect(list.size).toEqual(1);

			list.addToHead(1);
			expect(list.size).toEqual(2);

			list.addToHead(1);
			expect(list.size).toEqual(3);
		});

		test("updates the head but leaves the tail untouched", () => {
			const list = new DoublyLinkedList<number>();

			list.addToHead(1);
			expect(list.head?.value).toEqual(1);
			expect(list.tail?.value).toEqual(1);

			list.addToHead(2);
			expect(list.head?.value).toEqual(2);
			expect(list.tail?.value).toEqual(1);
		});

		test("correctly sets next and prev", () => {
			const list = new DoublyLinkedList<number>();

			list.addToHead(1);
			expect(list.head?.prev).toBeNull();
			expect(list.head?.next).toBeNull();
			expect(list.tail?.prev).toBeNull();
			expect(list.tail?.next).toBeNull();

			list.addToHead(2);
			expect(list.head?.prev).toBeNull();
			expect(list.head?.next?.value).toEqual(1);
			expect(list.tail?.prev?.value).toEqual(2);
			expect(list.tail?.next).toBeNull();

			list.addToHead(3);
			expect(list.head?.prev).toBeNull();
			expect(list.head?.next?.value).toEqual(2);
			expect(list.tail?.prev?.value).toEqual(2);
			expect(list.tail?.next).toBeNull();
		});
	});

	describe("addToTail", () => {
		test("sets the new node as head and tail", () => {
			const list = new DoublyLinkedList<number>();

			list.addToTail(1);

			expect(list.head?.value).toEqual(1);
			expect(list.tail?.value).toEqual(1);
		});

		test("increases the size of the list", () => {
			const list = new DoublyLinkedList<number>();

			list.addToTail(1);
			expect(list.size).toEqual(1);

			list.addToTail(1);
			expect(list.size).toEqual(2);

			list.addToTail(1);
			expect(list.size).toEqual(3);
		});

		test("updates the tail but leaves the head untouched", () => {
			const list = new DoublyLinkedList<number>();

			list.addToTail(1);
			expect(list.head?.value).toEqual(1);
			expect(list.tail?.value).toEqual(1);

			list.addToTail(2);
			expect(list.head?.value).toEqual(1);
			expect(list.tail?.value).toEqual(2);
		});

		test("correctly sets next and prev", () => {
			const list = new DoublyLinkedList<number>();

			list.addToTail(1);
			expect(list.head?.prev).toBeNull();
			expect(list.head?.next).toBeNull();
			expect(list.tail?.prev).toBeNull();
			expect(list.tail?.next).toBeNull();

			list.addToTail(2);
			expect(list.head?.prev).toBeNull();
			expect(list.head?.next?.value).toEqual(2);
			expect(list.tail?.prev?.value).toEqual(1);
			expect(list.tail?.next).toBeNull();

			list.addToTail(3);
			expect(list.head?.prev).toBeNull();
			expect(list.head?.next?.value).toEqual(2);
			expect(list.tail?.prev?.value).toEqual(2);
			expect(list.tail?.next).toBeNull();
		});
	});

	describe("removeFromHead", () => {
		test("returns null when there is no head", () => {
			const list = new DoublyLinkedList<number>();
			const removedElement = list.removeFromHead();
			expect(removedElement).toBeNull();
		});

		test("sets head and tail as null", () => {
			const list = new DoublyLinkedList<number>();
			list.addToHead(1);
			const removedElement = list.removeFromHead();
			expect(removedElement).toEqual(1);
			expect(list.head).toBeNull();
			expect(list.tail).toBeNull();
		});

		test("sets new head and leaves tail untouched", () => {
			const list = new DoublyLinkedList<number>();
			list.addToHead(1);
			list.addToHead(2);
			list.addToHead(3);
			list.addToHead(4);
			const removedElement = list.removeFromHead();
			expect(removedElement).toEqual(4);
			expect(list.head?.value).toEqual(3);
			expect(list.tail?.value).toEqual(1);
		});
	});

	describe("removeFromTail", () => {
		test("returns null when there is no tail", () => {
			const list = new DoublyLinkedList<number>();
			const removedElement = list.removeFromTail();
			expect(removedElement).toBeNull();
		});

		test("sets head and tail as null", () => {
			const list = new DoublyLinkedList<number>();
			list.addToTail(1);
			const removedElement = list.removeFromTail();
			expect(removedElement).toEqual(1);
			expect(list.head).toBeNull();
			expect(list.tail).toBeNull();
		});

		test("sets new tail and leaves head untouched", () => {
			const list = new DoublyLinkedList<number>();
			list.addToHead(1);
			list.addToHead(2);
			list.addToHead(3);
			list.addToHead(4);
			const removedElement = list.removeFromTail();
			expect(removedElement).toEqual(1);
			expect(list.head?.value).toEqual(4);
			expect(list.tail?.value).toEqual(2);
		});
	});
});
