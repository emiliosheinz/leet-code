function partition(array: number[], left: number, right: number) {
	/**
	 * I chose to always pick the most right element as the pivot.
	 * Even though this isn't the optimal approach it is the easiest for now
	 * */
	const pivot = array[right];
	let i = left;

	for (let j = left; j < right; j++) {
		if (array[j] <= pivot) {
			[array[i], array[j]] = [array[j], array[i]];
			i++;
		}
	}

	[array[i], array[right]] = [array[right], array[i]];
	return i;
}

export function quickSort(
	array: number[],
	left = 0,
	right = array.length - 1,
): number[] {
	if (left < right) {
		const pivotIndex = partition(array, left, right);
		quickSort(array, left, pivotIndex - 1);
		quickSort(array, pivotIndex + 1, right);
	}

	return array;
}
