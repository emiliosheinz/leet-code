export type Graph = Record<string, Record<string, number>>;

export function dijkstra(graph: Graph, start: string): Record<string, number> {
  // This needs to be replaced with a min heap implementation
  const discovered: Array<[string, number]> = [[start, 0]];
  const distances: Record<string, number> = {};

  for (const key of Object.keys(graph)) {
    distances[key] = key === start ? 0 : Number.POSITIVE_INFINITY;
  }

  while (discovered.length > 0) {
    const [currentNode, currentDistance] = discovered.shift()!;
    const neighbors = Object.entries(graph[currentNode]);

    if (distances[currentNode] > currentDistance) {
      distances[currentNode] = currentDistance;
    }

    for (const [neighbor, neighborDistance] of neighbors) {
      const distance = currentDistance + neighborDistance;
      if (distances[neighbor] <= distance) continue;
      discovered.push([neighbor, distance]);
    }
  }

  return distances;
}
