export class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

/**
 * @see: https://leetcode.com/problems/merge-two-sorted-lists
 * */
export function mergeTwoLists(
	list1: ListNode | null,
	list2: ListNode | null,
): ListNode | null {
	if (!list1) return list2;
	if (!list2) return list1;

	const isList1Smaller = list1.val < list2.val;
	const smaller = isList1Smaller ? list1 : list2;
	const bigger = isList1Smaller ? list2 : list1;

	return new ListNode(smaller?.val, mergeTwoLists(smaller?.next, bigger));
}
