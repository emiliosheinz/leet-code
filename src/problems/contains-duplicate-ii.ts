/**
 * The solution of this problem involves the concept of sliding window
 *
 * @see: https://leetcode.com/problems/contains-duplicate-ii
 * */
export function containsNearbyDuplicate(nums: number[], k: number): boolean {
	const set = new Set<number>();
	for (let i = 0; i < nums.length; i++) {
		if (set.has(nums[i])) return true;
		set.add(nums[i]);
		if (set.size > k) set.delete(nums[i - k]);
	}
	return false;
}
