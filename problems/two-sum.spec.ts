import { twoSum } from "./two-sum";

type TestData = [number[], number, [number, number]];

const testData: TestData[] = [
  [[2, 7, 11, 15], 9, [0, 1]],
  [[3, 2, 4], 6, [1, 2]],
  [[3, 3], 6, [0, 1]],
];

describe("contains-duplicate-ii", () => {
	test.each(testData)(
		"twoSum(%s, %s) should return %s",
		(nums, k, output) => {
			expect(twoSum(nums, k)).toEqual(output);
		},
	);
});
