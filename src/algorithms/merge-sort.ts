export class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function findMiddle(head: ListNode): ListNode {
	let slow = head;
	let fast = head.next;

	while (fast?.next) {
		slow = slow.next!;
		fast = fast.next.next;
	}

  return slow
}

function merge(l1: ListNode | null, l2: ListNode | null): ListNode {
	if (!l1) return l2!;
	if (!l2) return l1;

	const isList1Smaller = l1.val < l2.val;
	const smaller = isList1Smaller ? l1 : l2;
	const bigger = isList1Smaller ? l2 : l1;

	return new ListNode(smaller?.val, merge(smaller?.next, bigger));
}

export function mergeSort(head: ListNode | null): ListNode | null {
	if (!head || !head.next) return head;

  const middle = findMiddle(head);
  const afterMiddle = middle.next;
  middle.next = null
  const left = mergeSort(head);
  const right = mergeSort(afterMiddle);

	return merge(left, right);
}
