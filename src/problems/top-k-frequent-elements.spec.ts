
import { topKFrequent } from './top-k-frequent-elements';

describe('topKFrequent', () => {
  it('should return the two most frequent elements', () => {
    const nums = [1, 1, 1, 2, 2, 3];
    const k = 2;
    const result = topKFrequent(nums, k);
    expect(result.sort()).toEqual([1, 2].sort());
  });

  it('should return the only element when k = 1 and array has one element', () => {
    const nums = [1];
    const k = 1;
    const result = topKFrequent(nums, k);
    expect(result).toEqual([1]);
  });

  it('should return the k most frequent elements even if they are negative', () => {
    const nums = [-1, -1, -1, -2, -2, -3];
    const k = 2;
    const result = topKFrequent(nums, k);
    expect(result.sort()).toEqual([-1, -2].sort());
  });

  it('should return all unique elements when k equals number of unique elements', () => {
    const nums = [5, 6, 7, 8];
    const k = 4;
    const result = topKFrequent(nums, k);
    expect(result.sort()).toEqual([5, 6, 7, 8].sort());
  });

  it('should handle frequencies with same counts correctly', () => {
    const nums = [1, 2, 3, 1, 2, 3];
    const k = 2;
    const result = topKFrequent(nums, k);
    // Frequências são iguais, qualquer par é aceitável
    expect(result.length).toBe(2);
    expect([1, 2, 3]).toEqual(expect.arrayContaining(result));
  });

  it('should handle frequencies with a mix of positive and negavite numbers', () => {
    const nums = [4,1,-1,2,-1,2,3]
    const k = 2
    const result = topKFrequent(nums, k);
    expect(result.sort()).toEqual([-1, 2].sort());
  })
});
