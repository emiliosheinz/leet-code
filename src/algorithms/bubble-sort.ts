export function bubbleSort(nums: number[]): number[] {
	const values = [...nums];

	for (const _ of values) {
		let isSorted = true;
		for (let i = 0; i < values.length - 1; i++) {
			if (values[i] > values[i + 1]) {
				isSorted = false;
				[values[i], values[i + 1]] = [values[i + 1], values[i]];
			}
		}

		if (isSorted) {
			return values;
		}
	}

	return values;
}
