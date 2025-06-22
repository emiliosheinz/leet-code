export function bubbleSort(nums: number[]): number[] {
	for (let i = 0; i < nums.length; i++) {
		let swapped = false;
		for (let j = 0; j < nums.length - i - 1; j++) {
			if (nums[j] > nums[j + 1]) {
				swapped = true;
				[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
			}
		}
		if (!swapped) return nums;
	}
	return nums;
}
