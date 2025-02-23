/**
 * Its important to note that this could have been solved with
 * one single line using Javascript string and array function:
 * s.split(" ").map(word => word.split("").reverse().join("")).join(" ");
 *
 * @see: https://leetcode.com/problems/reverse-words-in-a-string-iii
 * */
export function reverseWords(s: string): string {
	/** Initializes the variables */
	let result = "";
	let left = 0;
	let right = 0;

	/**
	 * Using the two pointers strategy travel the right
	 * pointer until the next space and then reverse the word
	 * */
	while (right < s.length) {
		const isSpace = s[right] === " ";

		/** If it is a space invert the word */
		if (isSpace) {
			for (let i = right - 1; i >= left; i--) {
				result += s[i];
			}

			/** Add an space, add one to the right and make the left equal */
			result += " ";
			left = ++right;
		} else {
			/** Otherwise simply move the right more to the right */
			right++;
		}
	}

	/** Add the last word */
	for (let i = right - 1; i >= left; i--) {
		result += s[i];
	}

	return result;
}
