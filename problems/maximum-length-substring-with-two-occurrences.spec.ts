import { maximumLengthSubstring } from "./maximum-length-substring-with-two-occurrences";

type TestData = [string, number];

const testData: TestData[] = [
	["bcbbbcba", 4],
	["aaaa", 2],
	["aa", 2],
	["a", 1],
];

describe("maximum-length-substring-with-two-occurrences", () => {
	test.each(testData)(
		"maximumLengthSubstring(%s) should return %s",
		(input, output) => {
			expect(maximumLengthSubstring(input)).toEqual(output);
		},
	);
});
