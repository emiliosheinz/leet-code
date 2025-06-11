import { type Graph, dijkstra } from "./dijkstra";

describe("dijkstra", () => {
	it("returns correct distances for a simple graph", () => {
		const graph: Graph = {
			A: { B: 1, C: 4 },
			B: { C: 2, D: 5 },
			C: { D: 1 },
			D: {},
		};

		const result = dijkstra(graph, "A");
		expect(result).toEqual({ A: 0, B: 1, C: 3, D: 4 });
	});

	// it("handles graph with unreachable nodes", () => {
	// 	const graph: Graph = {
	// 		A: { B: 2 },
	// 		B: {},
	// 		C: { D: 1 },
	// 		D: {},
	// 	};
	//
	// 	const result = dijkstra(graph, "A");
	// 	expect(result).toEqual({
	// 		A: 0,
	// 		B: 2,
	// 		C: Number.POSITIVE_INFINITY,
	// 		D: Number.POSITIVE_INFINITY,
	// 	});
	// });
	//
	// it("returns 0 distance for start node only if graph is empty", () => {
	// 	const graph: Graph = {};
	// 	const result = dijkstra(graph, "A");
	// 	expect(result).toEqual({ A: 0 });
	// });
	//
	// it("returns correct distances for a self-loop", () => {
	// 	const graph: Graph = {
	// 		A: { A: 0, B: 3 },
	// 		B: { A: 3 },
	// 	};
	//
	// 	const result = dijkstra(graph, "A");
	// 	expect(result).toEqual({ A: 0, B: 3 });
	// });
	//
	// it("handles large weights correctly", () => {
	// 	const graph: Graph = {
	// 		A: { B: 1000 },
	// 		B: { C: 2000 },
	// 		C: {},
	// 	};
	//
	// 	const result = dijkstra(graph, "A");
	// 	expect(result).toEqual({ A: 0, B: 1000, C: 3000 });
	// });
});
