/**
 * Computes the number of 1s in the binary representation of each number from 0 to `n`.
 * This is done using dynamic programming and bitwise operations.
 *
 * The key idea is:
 * - `result[i >> 1]`: The number of 1s in `i` is based on the number of 1s in `i >> 1` (i.e., `i` divided by 2).
 * - `(i & 1)`: Adds 1 if `i` is odd (i.e., its least significant bit is 1), otherwise adds 0.
 *
 * This rellies on the fact that from the number 4 onwards, the number of 1s in the binary representation of a number 
 * `i` is based on the number of 1s in `i >> 1` and the least significant bit of `i`. Additionally it allows each result
 * to be computed in O(1) time, leading to an overall O(n) complexity.
 *
 * @see https://leetcode.com/problems/counting-bits
 * @see https://www.youtube.com/watch?v=RyBM56RIWrM
 * @param {number} n - The upper limit of numbers to compute the count of 1s for.
 * @returns {number[]} An array where the i-th element is the number of 1s in the binary representation of i.
 *
 * @example
 * countBits(5); // Returns [0, 1, 1, 2, 1, 2]
 */
export function countBits(n: number): number[] {
	const result = new Array(n + 1).fill(0);
	for (let i = 0; i < result.length; i++) {
		result[i] = result[i >> 1] + (i & 1);
	}
	return result;
}
