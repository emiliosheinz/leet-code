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
  if(!head) return null;
  let newList = null;
  while(head) {
    const next: ListNode | null = head.next;
    head.next = newList;
    newList = head;
    head = next;
  }
  return newList;
}

