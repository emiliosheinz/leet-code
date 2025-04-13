export function twoSum(nums: number[], target: number): number[] {
	const visited: Map<number, number> = new Map();

	for (let i = 0; i < nums.length; i++) {
		const currentNumber = nums[i];
		const pairIndex = visited.get(target - currentNumber);

		if (pairIndex !== undefined) {
			return [pairIndex, i];
		}

		visited.set(currentNumber, i);
	}

	return [];
}
