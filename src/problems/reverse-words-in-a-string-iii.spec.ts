import { reverseWords } from "./reverse-words-in-a-string-iii";

const testData = [
	["Let's take LeetCode contest", "s'teL ekat edoCteeL tsetnoc"],
	["Mr Ding", "rM gniD"],
	["hehhhhhhe", "ehhhhhheh"],
];

describe("reverse-words-in-a-string-iii", () => {
	test.each(testData)("reverseWords(%s) should return %s", (input, output) => {
		expect(reverseWords(input)).toBe(output);
	});
});
