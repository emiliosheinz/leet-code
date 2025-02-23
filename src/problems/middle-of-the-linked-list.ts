export class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

/**
 * To find the middle of a linked list, we can use two pointers: 
 * one moving at a normal pace (1x) and the other moving twice as fast (2x). 
 * When the faster pointer reaches the end of the list, the slower pointer 
 * will be at the middle.
 *
 * This approach can also be adapted with different speed ratios 
 * to solve various other problems.
 * 
 * @see: https://leetcode.com/problems/middle-of-the-linked-list
 * */
export function middleNode(head: ListNode | null): ListNode | null {
	if (!head) return null;
  let ahead: ListNode | null = head;
  while(ahead?.next) {
    ahead = ahead.next.next;
    head = head!.next
  }
  return head
}
