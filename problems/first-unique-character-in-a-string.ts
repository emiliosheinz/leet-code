/**
 * The solution of this problem involves the concept of HasMaps
 *
 * @see: https://leetcode.com/problems/first-unique-character-in-a-string
 */
export function firstUniqChar(s: string): number {
	/** Define initial variables */
	let index = 0;
	const map: Map<string, { position: number; counter: number }> = new Map();

	/**
	 * Walk through the string and store the position where a letter was found
	 * and the amount of times if was seen.
	 */
	while (index < s.length) {
		const currentChar = s[index];
		const info = map.get(currentChar);

		if (!info) {
			map.set(currentChar, { position: index, counter: 1 });
		} else {
			map.set(currentChar, { ...info, counter: info.counter + 1 });
		}

		index++;
	}

	/**
	 * In JavaScript the insertion order of elements in a Map are kept.
	 * Therefore, we can simply loop through the keys and return the
	 * first one with counter equals one
	 */
	for (const key of map.keys()) {
		const info = map.get(key);
		if (info?.counter === 1) {
			return info.position;
		}
	}

  /** Otherwise return -1 (not found) */
	return -1;
}
