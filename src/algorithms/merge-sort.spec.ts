import { ListNode, mergeSort } from "./merge-sort";

const testData = [
	{
		input: [1, 2, 3, 4, 5],
		expected: [1, 2, 3, 4, 5],
		description: "sorts an already sorted array",
	},
	{
		input: [5, 4, 3, 2, 1],
		expected: [1, 2, 3, 4, 5],
		description: "sorts a reverse sorted array",
	},
	{
		input: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5],
		expected: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9],
		description: "sorts an unsorted array",
	},
	{ input: [], expected: [], description: "handles an empty array" },
	{ input: [1], expected: [1], description: "handles a single element array" },
	{
		input: [5, 5, 5, 5],
		expected: [5, 5, 5, 5],
		description: "handles an array with identical elements",
	},
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

describe("mergeSort", () => {
	test.each(testData)("$description", ({ input, expected }) => {
		expect(toArray(mergeSort(toListNode(input)))).toEqual(expected);
	});
});
