import { MinPriorityQueue } from "@datastructures-js/priority-queue";

export class KthLargest {
  private queue = new MinPriorityQueue<number>();
  constructor(
    private k: number,
    nums: number[],
  ) {
    for (const number of nums) this.add(number);
  }

  add(val: number): number {
    this.queue.enqueue(val);
    while (this.queue.size() > this.k) this.queue.dequeue();
    return this.queue.front()!;
  }
}
