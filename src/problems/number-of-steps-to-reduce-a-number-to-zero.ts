/**
 * Even though this could easily be solved without bitwise operators,
 * I tried to challenge myself to go one step further.
 *
 * @see https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero
 * */
export function numberOfSteps(num: number): number {
	let counter = 0;
	while (num > 0) {
		if (num & 1) {
			num -= 1;
		} else {
			num >>= 1;
		}
		counter++;
	}
	return counter;
}
