export function networkDelayTime(
  times: number[][],
  n: number,
  k: number,
): number {
  // Build a hastable for O(1) access time
  const table = times.reduce(
    (acc, [source, target, time]) => {
      if (!acc[source]) acc[source] = {};
      acc[source][target] = time;
      return acc;
    },
    {} as Record<string, Record<string, number>>,
  );
  const discovered: Array<[number, number]> = [[k, 0]];
  const distances: Record<string, number> = {};

  while (discovered.length > 0) {
    const [currentNode, currentDistance] = discovered.shift()!;

    // If distance is not undefined it means this node was already visited
    if (distances[currentNode] !== undefined) continue;
    distances[currentNode] = currentDistance;

    // If there are no neighbors we can just go to the next one
    const neighbors = table[currentNode];
    if (!neighbors) continue;

    let shouldSort = false;
    for (const [neighbor, neighborDistance] of Object.entries(neighbors)) {
      const distance = currentDistance + neighborDistance;
      if (distance < (distances[neighbor] ?? Number.POSITIVE_INFINITY)) {
        discovered.push([Number(neighbor), distance]);
        shouldSort = true;
      }
    }
    // Mimic a min heap using an always sorted array
    if (shouldSort) discovered.sort(([, a], [, b]) => a - b);
  }

  // Ensure required edge cases
  const values = Object.values(distances);
  if (values.length < n) return -1;
  const longestDistance = Math.max(...values);
  if (longestDistance === 0) return -1;
  return longestDistance;
}
