/**
 * Explanation: https://www.youtube.com/watch?v=WnPLSRLSANE
 * 
 * The solution is to use the XOR operator to find the missing number.
 * It relies on the fact that XOR of a number with itself is 0, XOR of a 
 * number with 0 is the number itself, and the order of the operations
 * does not matter.
 *
 * That way we can XOR all the numbers in the array with the numbers from
 * 0 to n, and the result will be the missing number in the sequence.
 *
 * @see https://leetcode.com/problems/missing-number
 * */
export function missingNumber(nums: number[]): number {
	return nums.reduce(
		(result, current, idx) => result ^ current ^ idx,
		nums.length,
	);
}
