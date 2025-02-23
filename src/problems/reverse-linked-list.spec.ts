import { ListNode, reverseList } from "./reverse-linked-list";

type TestData = [number[], number[]];

const testData: TestData[] = [
	[
		[1, 2, 3, 4, 5],
		[5, 4, 3, 2, 1],
	],
	[
		[1, 2],
		[2, 1],
	],
	[[], []],
];

function toListNode(numbers: number[]): ListNode | null {
  if(!numbers.length) return null
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

describe("reverse-linked-list", () => {
	test.each(testData)("reserseList(%s) returns %s", (input, output) => {
		expect(toArray(reverseList(toListNode(input)))).toEqual(output);
	});
});
