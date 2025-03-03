import { hammingWeight } from "./number-of-1-bits";

const testData = [
	{
		input: 11,
		expected: 3,
	},
	{
		input: 128,
		expected: 1,
	},
	{
		input: 2147483645,
		expected: 30,
	},
];

describe("number-of-1-bits", () => {
	test.each(testData)(
		"numberOfSteps($input) should return $expected",
		({ input, expected }) => {
			expect(hammingWeight(input)).toBe(expected);
		},
	);
});
