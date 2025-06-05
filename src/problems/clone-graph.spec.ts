
import { cloneGraph, _Node } from './clone-graph';

describe('cloneGraph', () => {
  it('should return null for null input', () => {
    expect(cloneGraph(null)).toBeNull();
  });

  it('should clone a single node graph', () => {
    const node = new _Node(1);
    const cloned = cloneGraph(node);
    expect(cloned).not.toBe(node);
    expect(cloned?.val).toBe(1);
    expect(cloned?.neighbors).toEqual([]);
  });

  it('should clone a graph with multiple nodes and edges', () => {
    const node1 = new _Node(1);
    const node2 = new _Node(2);
    const node3 = new _Node(3);
    node1.neighbors.push(node2, node3);
    node2.neighbors.push(node1, node3);
    node3.neighbors.push(node1, node2);

    const cloned = cloneGraph(node1);
    expect(cloned).not.toBe(node1);
    expect(cloned?.val).toBe(1);
    expect(cloned?.neighbors.length).toBe(2);

    const clonedNode2 = cloned?.neighbors.find(n => n.val === 2);
    const clonedNode3 = cloned?.neighbors.find(n => n.val === 3);

    expect(clonedNode2).not.toBe(node2);
    expect(clonedNode3).not.toBe(node3);

    expect(clonedNode2?.neighbors.length).toBe(2);
    expect(clonedNode3?.neighbors.length).toBe(2);
  });
});
