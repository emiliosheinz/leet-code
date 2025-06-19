type State = "not_visited" | "visiting" | "visited";

export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
	const dependencyGraph: Record<number, Array<number>> = {};

	for (const [dependent, prerequisite] of prerequisites) {
		if (!dependencyGraph[dependent]) dependencyGraph[dependent] = [];
		dependencyGraph[dependent].push(prerequisite);
	}

	const state: Array<State> = Array.from({ length: numCourses }).fill(
		"not_visited",
	) as Array<State>;

	const hasCycle = (course: number): boolean => {
		if (state[course] === "visiting") return true;
		if (state[course] === "visited") return false;

		state[course] = "visiting";

		for (const neighbor of dependencyGraph[course] ?? []) {
			if (hasCycle(neighbor)) return true;
		}

		state[course] = "visited";
		return false;
	};

	for (let course = 0; course < numCourses; course++) {
		if (hasCycle(course)) return false;
	}

	return true;
}
