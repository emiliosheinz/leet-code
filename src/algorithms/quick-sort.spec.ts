import { quickSort } from "./quick-sort";

const hugeRandomArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000))

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
  {
    input: [0, 3, 6, 7, 8, 4, 2, 1, 5],
    expected: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    description: "sorts an unsorted array",
  },
  {
    input: hugeRandomArray,
    expected: hugeRandomArray.toSorted((a, b) => a - b),
    description: "sorts a huge random array",
  }
];

describe("quickSort", () => {
	test.each(testData)("$description", ({ input, expected }) => {
		expect(quickSort(input)).toEqual(expected);
	});
});
