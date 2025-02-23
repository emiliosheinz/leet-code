class Node<T> {
	constructor(
		public value: T,
		public next: Node<T> | null = null,
		public prev: Node<T> | null = null,
	) {}
}

export class DoubleLinkedList<T> {
	public head: Node<T> | null = null;
	public tail: Node<T> | null = null;
	public size = 0;

	public addToHead(value: T): void {
		const newNode = new Node(value);
		newNode.next = this.head;

		if (this.head) {
			this.head.prev = newNode;
		}

		if (this.tail === null) {
			this.tail = newNode;
		}

		this.head = newNode;
		this.size++;
	}

	public addToTail(value: T): void {
		const newNode = new Node(value);
		newNode.prev = this.tail;

		if (this.tail) {
			this.tail.next = newNode;
		}

		if (this.head === null) {
			this.head = newNode;
		}

		this.tail = newNode;
		this.size++;
	}

	public removeFromHead(): Node<T>['value'] | null {
		if (!this.head) return null;
		const removedNode = this.head;
		this.head = this.head.next;
		if (this.head) {
			this.head.prev = null;
		} else {
			this.tail = null;
		}
		return removedNode.value;
	}

	public removeFromTail(): Node<T>['value'] | null {
		if (!this.tail) return null;
		const removedNode = this.tail;
		this.tail = this.tail.prev;
		if (this.tail) {
			this.tail.next = null;
		} else {
			this.head = null;
		}
		return removedNode.value;
	}
}
