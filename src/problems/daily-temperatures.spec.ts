import { dailyTemperatures } from './daily-temperatures';

describe('dailyTemperatures', () => {
  it('should return correct result for mixed temperatures', () => {
    const input = [73, 74, 75, 71, 69, 72, 76, 73];
    const expected = [1, 1, 4, 2, 1, 1, 0, 0];
    expect(dailyTemperatures(input)).toEqual(expected);
  });

  it('should return correct result for strictly increasing temperatures', () => {
    const input = [30, 40, 50, 60];
    const expected = [1, 1, 1, 0];
    expect(dailyTemperatures(input)).toEqual(expected);
  });

  it('should return correct result for large jumps in temperature', () => {
    const input = [30, 60, 90];
    const expected = [1, 1, 0];
    expect(dailyTemperatures(input)).toEqual(expected);
  });

  it('should return all 0s for decreasing temperatures', () => {
    const input = [90, 80, 70, 60];
    const expected = [0, 0, 0, 0];
    expect(dailyTemperatures(input)).toEqual(expected);
  });

  it('should return all 0s for equal temperatures', () => {
    const input = [50, 50, 50, 50];
    const expected = [0, 0, 0, 0];
    expect(dailyTemperatures(input)).toEqual(expected);
  });

  it('should handle single temperature input', () => {
    const input = [70];
    const expected = [0];
    expect(dailyTemperatures(input)).toEqual(expected);
  });

  it('should handle two days where the second is warmer', () => {
    const input = [50, 60];
    const expected = [1, 0];
    expect(dailyTemperatures(input)).toEqual(expected);
  });

  it('should handle two days where the second is not warmer', () => {
    const input = [60, 50];
    const expected = [0, 0];
    expect(dailyTemperatures(input)).toEqual(expected);
  });
});
