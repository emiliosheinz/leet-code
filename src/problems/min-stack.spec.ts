import { MinStack } from './min-stack';

describe('MinStack', () => {
  let minStack: MinStack;

  beforeEach(() => {
    minStack = new MinStack();
  });

  it('should push elements and retrieve the correct min', () => {
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    expect(minStack.getMin()).toBe(-3);
  });

  it('should pop and update top and min correctly', () => {
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    minStack.pop();
    expect(minStack.top()).toBe(0);
    expect(minStack.getMin()).toBe(-2);
  });

  it('should handle a single element stack', () => {
    minStack.push(42);
    expect(minStack.top()).toBe(42);
    expect(minStack.getMin()).toBe(42);
    minStack.pop();
  });

  it('should handle multiple pushes and pops correctly', () => {
    minStack.push(2);
    minStack.push(0);
    minStack.push(3);
    minStack.push(0);
    expect(minStack.getMin()).toBe(0);
    minStack.pop();
    expect(minStack.getMin()).toBe(0);
    minStack.pop();
    expect(minStack.getMin()).toBe(0);
    minStack.pop();
    expect(minStack.getMin()).toBe(2);
  });
});
