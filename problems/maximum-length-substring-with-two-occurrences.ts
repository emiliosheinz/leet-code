/**
 * The solution of this problem involves the concept of sliding window
 *
 * @see: https://leetcode.com/problems/maximum-length-substring-with-two-occurrences
 * */
export function maximumLengthSubstring(s: string): number {
	/** Declare initial variables **/
	let left = 0;
	let right = 0;
	let maxLength = 0;
	const counter: Record<string, number> = {};

	/** Run while the right didn't reach the end */
	while (right < s.length) {
		/** Keep track of how many times each character appeared in the string */
		if (!counter[s[right]]) {
			counter[s[right]] = 1;
		} else {
			counter[s[right]] += 1;
		}

		/**
		 * If it appeared more than two times (which is the max defined by the problem),
		 * contract the window until the letter is back into the boundaries.
		 */
		while (counter[s[right]] > 2) {
			counter[s[left]] -= 1;
			left++;
		}

		/** Calculate the new max length */
		maxLength = Math.max(maxLength, right - left + 1);
		right++;
	}

	return maxLength;
}
