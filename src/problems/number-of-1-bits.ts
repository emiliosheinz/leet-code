/**
 * @see https://leetcode.com/problems/number-of-1-bits
 * */
export function hammingWeight(n: number): number {
	let counter = 0;
	while (n > 0) {
		if (n & 1) counter++;
		n >>= 1;
	}
	return counter;
}
