import { missingNumber } from "./missing-number";

const testData = [
	{
		input: [3, 0, 1],
		output: 2,
	},
	// {
	// 	input: [0, 1],
	// 	output: 2,
	// },
	// {
	// 	input: [9, 6, 4, 2, 3, 5, 7, 0, 1],
	// 	output: 8,
	// },
];

describe("missingNumber", () => {
	test.each(testData)(
		"missingNumber($input) should return $output",
		({ input, output }) => {
			expect(missingNumber(input)).toEqual(output);
		},
	);
});
