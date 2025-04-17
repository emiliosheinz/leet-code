export class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

/**
 * This implementation checks if a linked list has a cycle using 
 * the Floyd's Tortoise and Hare algorithm, aka the two-pointer technique.
 *
 * @see https://leetcode.com/problems/linked-list-cycle
 **/ 
export function hasCycle(head: ListNode | null): boolean {
	let slow: ListNode | null = head;
	let fast: ListNode | null = head;

	while (fast?.next) {
		slow = slow!.next;
		fast = fast.next.next;
		if (slow === fast) return true;
	}

	return false;
}
