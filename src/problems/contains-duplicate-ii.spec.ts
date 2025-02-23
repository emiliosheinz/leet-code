import { containsNearbyDuplicate } from "./contains-duplicate-ii";

type TestData = [number[], number, boolean];

const testData: TestData[] = [
	[[1, 2, 3, 1], 3, true],
	[[1, 0, 1, 1], 1, true],
	[[1, 2, 3, 1, 2, 3], 2, false],
];

describe("contains-duplicate-ii", () => {
	test.each(testData)(
		"containsNearbyDuplicate(%s, %s) should return %s",
		(nums, k, output) => {
			expect(containsNearbyDuplicate(nums, k)).toEqual(output);
		},
	);
});
