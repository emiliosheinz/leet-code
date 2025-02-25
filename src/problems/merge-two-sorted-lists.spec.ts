import { ListNode, mergeTwoLists } from "./merge-two-sorted-lists";

type TestData = [number[], number[], number[]];

const testData: TestData[] = [
	[
		[1, 2, 3],
		[1, 3, 4],
		[1, 1, 2, 3, 3, 4],
	],
	[[], [], []],
	[[], [0], [0]],
];

function toListNode(numbers: number[]): ListNode | null {
	if (!numbers.length) return null;
	let head = new ListNode(numbers[numbers.length - 1], null);
	for (let i = numbers.length - 2; i >= 0; i--) {
		head = new ListNode(numbers[i], head);
	}
	return head;
}

function toArray(head: ListNode | null): number[] {
	if (!head) return [];
	let currentHead = head;
	const numbers: number[] = [currentHead.val];
	while (currentHead.next) {
		numbers.push(currentHead.next.val);
		currentHead = currentHead.next;
	}
	return numbers;
}

describe("merge-two-sorted-lists.ts", () => {
	test.each(testData)("mergeTwoLists(%s, %s) returns %s", (list1, list2, output) => {
		expect(toArray(mergeTwoLists(toListNode(list1), toListNode(list2)))).toEqual(output);
	});
});
