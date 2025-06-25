import { coinChange } from './coin-change';

describe('coinChange', () => {
  it('should return 3 when coins = [1,2,5] and amount = 11', () => {
    expect(coinChange([1, 2, 5], 11)).toBe(3); // 5 + 5 + 1
  });

  // it('should return -1 when coins = [2] and amount = 3', () => {
  //   expect(coinChange([2], 3)).toBe(-1); // Impossible
  // });
  //
  // it('should return 0 when coins = [1] and amount = 0', () => {
  //   expect(coinChange([1], 0)).toBe(0); // No coins needed
  // });
  //
  // it('should return 1 when coins = [1] and amount = 1', () => {
  //   expect(coinChange([1], 1)).toBe(1);
  // });
  //
  // it('should return 20 when coins = [1,2,5] and amount = 100', () => {
  //   expect(coinChange([1, 2, 5], 100)).toBe(20); // 5*20
  // });
  //
  // it('should handle unsorted coin array', () => {
  //   expect(coinChange([5, 1, 2], 11)).toBe(3);
  // });
  //
  // it('should return -1 if no combination possible with large coins', () => {
  //   expect(coinChange([7, 10], 5)).toBe(-1);
  // });
  //
  // it('should return correct result for prime coins and composite amount', () => {
  //   expect(coinChange([3, 7], 14)).toBe(2); // 7 + 7
  // });
});
