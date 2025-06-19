export function dailyTemperatures(temperatures: number[]): number[] {
	const stack: number[] = [];
	const result: number[] = new Array(temperatures.length).fill(0);

	for (let i = 0; i < temperatures.length; i++) {
		while (
			stack.length > 0 &&
			temperatures[stack[stack.length - 1]] < temperatures[i]
		) {
			const index = stack.pop()!;
			result[index] = i - index;
		}

		stack.push(i);
	}

	return result;
}
