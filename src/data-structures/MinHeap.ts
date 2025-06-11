// TODO relace Array<number> with Array<MinHeapItem>
export interface MinHeapItem {
  value: number;
}

export class MinHeap {
  private heap: Array<number> = [];

  public insert(value: number) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  public pop(): number {
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

  private bubbleUp(index: number) {
    if (index === 0) return;
    const parentIndex = this.getParentIndex(index);
    if (this.heap[index] >= this.heap[parentIndex]) return;
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
      this.heap[leftChildIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = leftChildIndex;
    }

    if (
      rightChildIndex < size &&
      this.heap[rightChildIndex] < this.heap[smallestIndex]
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
