import { search } from "./binary-search";

type TestData = [number[], number, number];

const testData: TestData[] = [
	[[-1, 0, 3, 5, 9, 12], 9, 4],
	[[-1, 0, 3, 5, 9, 12], 2, -1],
];

describe("binary-search", () => {
  test.each(testData)("search(%s, %s) should return %s", (nums, target, expected) => {
    expect(search(nums, target)).toBe(expected);
  })
});
