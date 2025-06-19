import { numIslands } from './number-of-islands';

describe('numIslands', () => {
  it('returns 1 for a single big island', () => {
    const grid = [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"]
    ];
    expect(numIslands(grid)).toBe(1);
  });

  it('returns 3 for multiple small islands', () => {
    const grid = [
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"]
    ];
    expect(numIslands(grid)).toBe(3);
  });

  it('returns 0 for grid with only water', () => {
    const grid = [
      ["0", "0", "0"],
      ["0", "0", "0"]
    ];
    expect(numIslands(grid)).toBe(0);
  });

  it('returns 1 for grid with one single land cell', () => {
    const grid = [
      ["0", "0", "0"],
      ["0", "1", "0"],
      ["0", "0", "0"]
    ];
    expect(numIslands(grid)).toBe(1);
  });

  it('returns correct count for checkerboard pattern', () => {
    const grid = [
      ["1", "0", "1"],
      ["0", "1", "0"],
      ["1", "0", "1"]
    ];
    expect(numIslands(grid)).toBe(5);
  });

  it('handles vertical islands', () => {
    const grid = [
      ["1"],
      ["1"],
      ["0"],
      ["1"]
    ];
    expect(numIslands(grid)).toBe(2);
  });

  it('handles horizontal islands', () => {
    const grid = [["1", "1", "0", "1"]];
    expect(numIslands(grid)).toBe(2);
  });

  it('returns 0 for empty grid', () => {
    const grid: string[][] = [];
    expect(numIslands(grid)).toBe(0);
  });

  it('returns 1 for 1x1 grid with land', () => {
    const grid = [["1"]];
    expect(numIslands(grid)).toBe(1);
  });

  it('returns 0 for 1x1 grid with water', () => {
    const grid = [["0"]];
    expect(numIslands(grid)).toBe(0);
  });
});
