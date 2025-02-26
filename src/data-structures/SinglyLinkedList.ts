class Node<T> {
	constructor(
		public value: T,
		public next: Node<T> | null = null,
	) {}
}

export class SinglyLinkedList<T> {
	public head: Node<T> | null = null;
	public tail: Node<T> | null = null;
	public size = 0;

	append(value: T): void {
		const node = new Node(value);
		if (!this.tail) {
			this.tail = node;
			this.head = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		this.size++;
	}

	prepend(value: T): void {
		const node = new Node(value);
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			node.next = this.head;
			this.head = node;
		}
		this.size++;
	}

	insertAt(index: number, value: T): void {
		if (index < 0 || index > this.size) {
			throw new Error("Index out of bounds");
		}

		if (index === 0) {
			this.prepend(value);
			return;
		}

		if (index === this.size) {
			this.append(value);
			return;
		}

		let currentNode = this.head;
		for (let i = 0; i < index - 1; i++) {
			currentNode = currentNode!.next;
		}

		const newNode = new Node(value);
		newNode.next = currentNode!.next;
		currentNode!.next = newNode;
		this.size++;
	}

	removeAt(index: number): void {
		if (index < 0 || index >= this.size) {
			throw new Error("Index out of bounds");
		}

		if (index === 0) {
			this.head = this.head!.next;
			this.size--;
			return;
		}

		const isRemovingTail = index === this.size - 1;
		let currentNode = this.head;

		for (let i = 0; i < index - 1; i++) {
			currentNode = currentNode!.next;
		}

		currentNode!.next = currentNode!.next?.next ?? null;

		if (isRemovingTail) {
			this.tail = currentNode;
		}

		this.size--;
	}

  find(value: T): Node<T> | null {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) return currentNode;
      currentNode = currentNode.next;
    }

    return null;
  }
}
