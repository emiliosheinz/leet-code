/**
 * @see: https://leetcode.com/problems/binary-search
 * */
export function search(nums: number[], target: number): number {
	/** Define low and high */
	let low = 0;
	let high = nums.length - 1;

	while (low <= high) {
		/** Find the middle element */
		const mid = Math.ceil((high + low) / 2);
		const current = nums[mid];

		/** If the current element is equals the target then then we found it */
		if (current === target) {
			return mid;
		}

		/** If the target is bigger we know that it is to the right */
		if (target > current) {
			low = mid + 1;
			/** Otherwise it is to the left */
		} else {
			high = mid - 1;
		}
	}

	/** We searched through the entire array and didn't find it */
	return -1;
}
