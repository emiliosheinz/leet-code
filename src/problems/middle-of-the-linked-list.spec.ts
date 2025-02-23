
import { ListNode, middleNode } from "./middle-of-the-linked-list";

type TestData = [number[], number[]];

const testData: TestData[] = [
	[
		[1,2,3,4,5],
		[3,4,5],
	],
	[
		[1,2,3,4,5,6],
		[4, 5, 6],
	],
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

describe("middle-of-the-linkedd-list", () => {
	test.each(testData)("middleNode(%s) returns %s", (input, output) => {
		expect(toArray(middleNode(toListNode(input)))).toEqual(output);
	});
});
