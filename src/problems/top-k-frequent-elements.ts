export function topKFrequent(nums: number[], k: number): number[] {
	const map: Map<number, number> = new Map();
	const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);

	for (const num of nums) {
		if (map.has(num)) map.set(num, map.get(num)! + 1);
		else map.set(num, 1);
	}

	for (const [num, freq] of map.entries()) {
		buckets[freq].push(Number(num));
	}

	const result = buckets.flat();
	return result.slice(result.length - k);
}
