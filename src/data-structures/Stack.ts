export class Stack<T> {
	public items: T[] = [];

	public push(item: T): void {
		this.items.push(item);
	}

	public pop(): T {
		if (this.isEmtpy()) {
			throw new RangeError("Stack is empty");
		}

		return this.items.pop()!;
	}

	public peek(): T {
		if (this.isEmtpy()) {
			throw new RangeError("Stack is empty");
		}

		return this.items[this.items.length - 1];
	}

	public size(): number {
		return this.items.length;
	}

	public isEmtpy(): boolean {
		return this.items.length === 0;
	}
}
