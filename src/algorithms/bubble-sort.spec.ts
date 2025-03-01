import { bubbleSort } from "./bubble-sort";

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

describe("bubbleSort", () => {
	test.each(testData)("$description", ({ input, expected }) => {
		expect(bubbleSort(input)).toEqual(expected);
	});
});
