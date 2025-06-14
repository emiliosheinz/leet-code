export interface MinHeapItem {
  value: number;
}

export class MinHeap<T extends MinHeapItem = MinHeapItem> {
  private heap: Array<T> = [];

  public constructor(items: Array<T> = []) {
    for (const item of items) {
      this.insert(item);
    }
  }

  public insert(value: T) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  public pop(): T {
    if (this.heap.length === 0) {
      throw new RangeError("Heap is empty");
    }

    if (this.heap.length === 1) {
      return this.heap.pop()!;
    }

    const root = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.bubbleDown(0);
    return root;
  }

  public size(): number {
    return this.heap.length;
  }

  private bubbleUp(index: number) {
    if (index === 0) return;
    const parentIndex = this.getParentIndex(index);
    if (this.heap[index].value >= this.heap[parentIndex].value) return;
    [this.heap[index], this.heap[parentIndex]] = [
      this.heap[parentIndex],
      this.heap[index],
    ];
    this.bubbleUp(parentIndex);
  }

  private bubbleDown(index: number) {
    const size = this.heap.length;
    const leftChildIndex = this.getLefChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);
    let smallestIndex = index;

    if (
      leftChildIndex < size &&
      this.heap[leftChildIndex].value < this.heap[smallestIndex].value
    ) {
      smallestIndex = leftChildIndex;
    }

    if (
      rightChildIndex < size &&
      this.heap[rightChildIndex].value < this.heap[smallestIndex].value
    ) {
      smallestIndex = rightChildIndex;
    }

    if (smallestIndex !== index) {
      [this.heap[smallestIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[smallestIndex],
      ];
      this.bubbleDown(index);
    }
  }

  private getLefChildIndex(index: number): number {
    return 2 * index + 1;
  }

  private getRightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }
}
