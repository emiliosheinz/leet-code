import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const queue = new MaxPriorityQueue<number>()

  for (const list of lists) {
    let node = list;
    while (node) {
      queue.push(node.val);
      node = node.next;
    }
  }

  let result: ListNode | null = null;
  while(queue.front() !== null) {
      result = new ListNode(queue.pop()!, result); 
  }

  return result; 
}
