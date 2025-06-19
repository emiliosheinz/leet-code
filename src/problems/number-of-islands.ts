enum Surfaces {
	Water = "0",
	UnknownLand = "1",
	VisitedLand = "-1",
}

function isUnknownLand(surface: string): boolean {
	return surface === Surfaces.UnknownLand;
}

export function numIslands(grid: string[][]): number {
	let result = 0;

	const traverse = (l: number, c: number) => {
		const stack = [[l, c]];

		while (stack.length) {
			const [x, y] = stack.pop()!;
			if (x < 0 || y < 0) continue;
			if (x >= grid.length || y >= grid[l].length) continue;
			if (grid[x][y] !== Surfaces.UnknownLand) continue;
			grid[x][y] = Surfaces.VisitedLand;
			stack.push([x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]);
		}
	};

	for (let l = 0; l < grid.length; l++) {
		for (let c = 0; c < grid[l].length; c++) {
			if (isUnknownLand(grid[l][c])) {
				traverse(l, c);
				result++;
			}
		}
	}

	return result;
}
