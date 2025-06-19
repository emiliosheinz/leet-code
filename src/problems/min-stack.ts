export class MinStack {
	private stack: number[] = [];
	private minStack: number[] = [];

	public push(val: number): void {
		this.stack.push(val);
		if (this.minStack.length) {
			val = Math.min(this.minStack[this.minStack.length - 1], val);
		}
		this.minStack.push(val);
	}

	public pop(): void {
		this.stack.pop();
		this.minStack.pop();
	}

	public top(): number {
		return this.stack[this.stack.length - 1];
	}

	public getMin(): number {
		return this.minStack[this.minStack.length - 1];
	}
}
