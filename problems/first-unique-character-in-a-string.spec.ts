import { firstUniqChar } from "./first-unique-character-in-a-string";

type TestData = [string, number];

const testData: TestData[] = [
	["leetcode", 0],
	["loveleetcode", 2],
	["aabb", -1],
];

describe("first-unique-character-in-a-string", () => {
	test.each(testData)("firstUniqChar(%s) should return %s", (input, output) => {
		expect(firstUniqChar(input)).toEqual(output);
	});
});
