/**
 * The solution of this problem involves the concept of HashMaps
 *
 * @see: https://leetcode.com/problems/two-sum
 */
export function twoSum(nums: number[], target: number): number[] {
	/** Declare auxiliary data structures */
	const visited: Map<number, number> = new Map();

	/** Loop through the array of nums */
	for (let i = 0; i < nums.length; i++) {
		const currentNumber = nums[i];

		/** Check if the current number pair was already visited  */
		const pairIndex = visited.get(target - currentNumber);
		if (pairIndex !== undefined) {
			/** If yes, return the pair */
			return [pairIndex, i];
		}

		/* Otherwise, add the current number to the visited hash map and cotinue searching */
		visited.set(currentNumber, i);
	}

	/** Return empty array if the pair was not found */
	return [];
}
