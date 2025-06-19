import { Stack } from './Stack';

describe('Stack', () => {
	let stack: Stack<number>;

	beforeEach(() => {
		stack = new Stack<number>();
	});

	test('should push items onto the stack', () => {
		stack.push(1);
		stack.push(2);
		expect(stack.size()).toBe(2);
		expect(stack.peek()).toBe(2);
	});

	test('should pop items from the stack', () => {
		stack.push(1);
		stack.push(2);
		const poppedItem = stack.pop();
		expect(poppedItem).toBe(2);
		expect(stack.size()).toBe(1);
	});

	test('should throw error when popping from an empty stack', () => {
		expect(() => stack.pop()).toThrow(RangeError);
	});

	test('should peek the top item without removing it', () => {
		stack.push(1);
		stack.push(2);
		expect(stack.peek()).toBe(2);
		expect(stack.size()).toBe(2);
	});

	test('should throw error when peeking into an empty stack', () => {
		expect(() => stack.peek()).toThrow(RangeError);
	});

	test('should return correct size of the stack', () => {
		expect(stack.size()).toBe(0);
		stack.push(1);
		expect(stack.size()).toBe(1);
	});

	test('should correctly identify if the stack is empty', () => {
		expect(stack.isEmtpy()).toBe(true);
		stack.push(1);
		expect(stack.isEmtpy()).toBe(false);
	});
});
