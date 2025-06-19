export class Node<T> {

	public constructor(
		public value: T,
		public next: Node<T> | null = null,
	) {}
}

export class Stack<T> {
	private top: Node<T> | null = null;
	private currentSize = 0;

	public push(value: T): void {
		const newNode = new Node(value, this.top);
		this.top = newNode;
		this.currentSize++;
	}

	public pop(): T {
		if (this.isEmtpy()) {
			throw new RangeError("Stack is empty");
		}

		const result = this.top!.value;
    this.top = this.top!.next;
    this.currentSize--;
    return result;
	}

	public peek(): T {
		if (this.isEmtpy()) {
			throw new RangeError("Stack is empty");
		}

		return this.top!.value;
	}

	public size(): number {
		return this.currentSize;
	}

	public isEmtpy(): boolean {
		return this.top === null;
	}
}
