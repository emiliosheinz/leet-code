import { ListNode, hasCycle } from './linked-list-cycle';

describe('hasCycle', () => {
  it('should return false for an empty list', () => {
    expect(hasCycle(null)).toBe(false);
  });

  it('should return false for a single node without a cycle', () => {
    const node = new ListNode(1);
    expect(hasCycle(node)).toBe(false);
  });

  it('should return true for a single node with a cycle', () => {
    const node = new ListNode(1);
    node.next = node; 
    expect(hasCycle(node)).toBe(true);
  });

  it('should return false for a multi-node list without a cycle', () => {
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    node1.next = node2;
    node2.next = node3;
    expect(hasCycle(node1)).toBe(false);
  });

  it('should return true for a multi-node list with a cycle', () => {
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    node1.next = node2;
    node2.next = node3;
    node3.next = node1; 
    expect(hasCycle(node1)).toBe(true);
  });
});
