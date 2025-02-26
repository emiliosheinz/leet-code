import { SinglyLinkedList } from "./SinglyLinkedList";

describe("SinglyLinkedList", () => {
	test("initializes with null head and tail and zero size", () => {
		const list = new SinglyLinkedList<number>();
		expect(list.head).toBeNull();
		expect(list.tail).toBeNull();
		expect(list.size).toEqual(0);
	});

	describe("append", () => {
		test("sets the new node as head and tail", () => {
			const list = new SinglyLinkedList<number>();

			list.append(1);

			expect(list.head?.value).toEqual(1);
			expect(list.tail?.value).toEqual(1);
		});

		test("increases the size of the list", () => {
			const list = new SinglyLinkedList<number>();

			list.append(1);
			expect(list.size).toEqual(1);

			list.append(1);
			expect(list.size).toEqual(2);

			list.append(1);
			expect(list.size).toEqual(3);
		});

		test("updates the head but leaves the tail untouched", () => {
			const list = new SinglyLinkedList<number>();

			list.append(1);
			expect(list.head?.value).toEqual(1);
			expect(list.tail?.value).toEqual(1);

			list.append(2);
			expect(list.head?.value).toEqual(1);
			expect(list.tail?.value).toEqual(2);
		});

		test("correctly sets next", () => {
			const list = new SinglyLinkedList<number>();

			list.append(1);
			expect(list.head?.next).toBeNull();
			expect(list.tail?.next).toBeNull();

			list.append(2);
			expect(list.head?.next?.value).toEqual(2);
			expect(list.tail?.next).toBeNull();

			list.append(3);
			expect(list.head?.next?.value).toEqual(2);
			expect(list.tail?.next).toBeNull();
		});
	});

	describe("prepend", () => {
		test("sets the new node as head and tail", () => {
			const list = new SinglyLinkedList<number>();

			list.prepend(1);

			expect(list.head?.value).toEqual(1);
			expect(list.tail?.value).toEqual(1);
		});

		test("increases the size of the list", () => {
			const list = new SinglyLinkedList<number>();

			list.prepend(1);
			expect(list.size).toEqual(1);

			list.prepend(1);
			expect(list.size).toEqual(2);

			list.prepend(1);
			expect(list.size).toEqual(3);
		});

		test("updates the head but leaves the tail untouched", () => {
			const list = new SinglyLinkedList<number>();

			list.prepend(1);
			expect(list.head?.value).toEqual(1);
			expect(list.tail?.value).toEqual(1);

			list.prepend(2);
			expect(list.head?.value).toEqual(2);
			expect(list.tail?.value).toEqual(1);
		});

		test("correctly sets next", () => {
			const list = new SinglyLinkedList<number>();

			list.prepend(1);
			expect(list.head?.next).toBeNull();
			expect(list.tail?.next).toBeNull();

			list.prepend(2);
			expect(list.head?.next?.value).toEqual(1);
			expect(list.tail?.next).toBeNull();

			list.prepend(3);
			expect(list.head?.next?.value).toEqual(2);
			expect(list.tail?.next).toBeNull();
		});
	});

	describe("insertAt", () => {
		test("throws an error if index is out of bounds", () => {
			const list = new SinglyLinkedList<number>();

			expect(() => list.insertAt(-1, 1)).toThrow("Index out of bounds");
			expect(() => list.insertAt(1, 1)).toThrow("Index out of bounds");
		});

		test("prepends if index is 0", () => {
			const list = new SinglyLinkedList<number>();

			list.insertAt(0, 1);
			expect(list.head?.value).toEqual(1);
			expect(list.tail?.value).toEqual(1);
		});

		test("appends if index is the size of the list", () => {
			const list = new SinglyLinkedList<number>();

			list.insertAt(0, 1);
			list.insertAt(1, 2);
			list.insertAt(2, 3);

			expect(list.head?.value).toEqual(1);
			expect(list.head?.next?.value).toEqual(2);
			expect(list.tail?.value).toEqual(3);
		});

		test("inserts in the middle of the list", () => {
			const list = new SinglyLinkedList<number>();

			list.insertAt(0, 1);
			list.insertAt(1, 3);
			list.insertAt(1, 2);

			expect(list.head?.value).toEqual(1);
			expect(list.head?.next?.value).toEqual(2);
			expect(list.tail?.value).toEqual;
		});
	});

  describe("removesAt", () => {
    test("throws an error if index is out of bounds", () => {
      const list = new SinglyLinkedList<number>();

      expect(() => list.removeAt(-1)).toThrow("Index out of bounds");
      expect(() => list.removeAt(1)).toThrow("Index out of bounds");
    })

    test("removes the head", () => {
      const list = new SinglyLinkedList<number>();

      list.append(1);
      list.append(2);
      list.append(3);

      list.removeAt(0);

      expect(list.head?.value).toEqual(2);
      expect(list.head?.next?.value).toEqual(3);
      expect(list.tail?.value).toEqual(3);
    })

    test("removes the tail", () => {
      const list = new SinglyLinkedList<number>();

      list.append(1);
      list.append(2);
      list.append(3);

      list.removeAt(2);

      expect(list.head?.value).toEqual(1);
      expect(list.head?.next?.value).toEqual(2);
      expect(list.tail?.value).toEqual(2);
    })

    test("removes the middle node", () => {
      const list = new SinglyLinkedList<number>();

      list.append(1);
      list.append(2);
      list.append(3);

      list.removeAt(1);

      expect(list.head?.value).toEqual(1);
      expect(list.head?.next?.value).toEqual(3);
      expect(list.tail?.value).toEqual
    })
  })

  describe("find", () => {
    test("returns the node with the given value", () => {
      const list = new SinglyLinkedList<number>();

      list.append(1);
      list.append(2);
      list.append(3);

      expect(list.find(2)?.value).toEqual(2);
    })

    test("returns null if the value is not in the list", () => {
      const list = new SinglyLinkedList<number>();

      list.append(1);
      list.append(2);
      list.append(3);

      expect(list.find(4)).toBeNull();
    })
  })
});
