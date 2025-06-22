import { PriorityQueue } from "@datastructures-js/priority-queue";

export class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
	const queue = new PriorityQueue<ListNode>(
		(a, b) => a.val - b.val,
		lists.filter(Boolean) as ListNode[],
	);

	const result = new ListNode();
	let current = result;
	while (queue.front() !== null) {
		current = current.next = queue.pop()!;
		if (current.next) queue.push(current.next);
	}

	return result.next;
}
