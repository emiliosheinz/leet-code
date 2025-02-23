export class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

/**
 * @see: https://leetcode.com/problems/reverse-linked-list
 * */
export function reverseList(head: ListNode | null): ListNode | null {
	if (!head) return null;
	let newHead = null;
	let currentNode: ListNode | null = head;
	while (currentNode) {
		const nextNode: ListNode | null = currentNode.next;
		currentNode.next = newHead;
		newHead = currentNode;
		currentNode = nextNode;
	}
	return newHead;
}
