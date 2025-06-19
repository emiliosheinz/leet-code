import { ListNode, mergeKLists } from "./merge-k-sorted-lists";

function arrayToList(arr: number[]): ListNode | null {
  const dummy = new ListNode();
  let current = dummy;
  for (const num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

describe("mergeKLists", () => {
  it("merges three sorted linked lists correctly", () => {
    const lists = [
      arrayToList([1, 4, 5]),
      arrayToList([1, 3, 4]),
      arrayToList([2, 6]),
    ];
    const merged = mergeKLists(lists);
    expect(listToArray(merged)).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
  });

  it("returns empty list when input is empty", () => {
    const merged = mergeKLists([]);
    expect(listToArray(merged)).toEqual([]);
  });

  it("returns empty list when all inputs are empty lists", () => {
    const merged = mergeKLists([null, null]);
    expect(listToArray(merged)).toEqual([]);
  });

  it("handles single non-empty list", () => {
    const lists = [arrayToList([1, 2, 3])];
    const merged = mergeKLists(lists);
    expect(listToArray(merged)).toEqual([1, 2, 3]);
  });

  it("handles multiple empty and non-empty lists", () => {
    const lists = [null, arrayToList([2]), null, arrayToList([1, 3])];
    const merged = mergeKLists(lists);
    expect(listToArray(merged)).toEqual([1, 2, 3]);
  });

  it("handles duplicate values across lists", () => {
    const lists = [arrayToList([2, 2, 2]), arrayToList([2, 2])];
    const merged = mergeKLists(lists);
    expect(listToArray(merged)).toEqual([2, 2, 2, 2, 2]);
  });
});
