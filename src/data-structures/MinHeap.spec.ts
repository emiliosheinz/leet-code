import { MinHeap, type MinHeapItem } from './MinHeap';

describe('MinHeap', () => {
  interface TestItem extends MinHeapItem {
    value: number;
  }

  let heap: MinHeap<TestItem>;

  beforeEach(() => {
    heap = new MinHeap<TestItem>();
  });

  test('should insert items and maintain heap property', () => {
    heap.insert({ value: 10 });
    heap.insert({ value: 5 });
    heap.insert({ value: 15 });

    expect(heap.pop().value).toBe(5);
    expect(heap.pop().value).toBe(10);
    expect(heap.pop().value).toBe(15);
  });

  test('should throw error when popping from an empty heap', () => {
    expect(() => heap.pop()).toThrow(RangeError);
  });

  test('should return correct size', () => {
    expect(heap.size()).toBe(0);
    heap.insert({ value: 10 });
    expect(heap.size()).toBe(1);
    heap.insert({ value: 5 });
    expect(heap.size()).toBe(2);
  });

  test('should initialize with items and maintain heap property', () => {
    const items = [{ value: 10 }, { value: 5 }, { value: 15 }];
    heap = new MinHeap<TestItem>(items);

    expect(heap.size()).toBe(3);
    expect(heap.pop().value).toBe(5);
    expect(heap.pop().value).toBe(10);
    expect(heap.pop().value).toBe(15);
  });

  test('constructor should create an empty heap when no items are provided', () => {
    heap = new MinHeap<TestItem>();
    expect(heap.size()).toBe(0);
  });
});
