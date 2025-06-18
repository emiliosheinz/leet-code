import { MinHeap, type MinHeapItem } from "../data-structures/MinHeap";

export type Graph = Record<string, Record<string, number>>;

type Discovered = MinHeapItem & { key: string };

export function dijkstra(graph: Graph, start: string): Record<string, number> {
  const initialDiscovered = [{ key: start, value: 0 }];
  const discovered: MinHeap<Discovered> = new MinHeap(initialDiscovered);
  const distances: Record<string, number> = {};

  for (const key of Object.keys(graph)) {
    distances[key] = Number.POSITIVE_INFINITY;
  }

  while (discovered.size() > 0) {
    const { key: currentNode, value: currentDistance } = discovered.pop();

    if (distances[currentNode] !== Number.POSITIVE_INFINITY) continue;
    distances[currentNode] = currentDistance;

    const neighbors = Object.entries(graph[currentNode] ?? {});
    for (const [neighbor, neighborDistance] of neighbors) {
      const distance = currentDistance + neighborDistance;
      if (distances[neighbor] <= distance) continue;
      discovered.insert({ key: neighbor, value: distance });
    }
  }

  return distances;
}
