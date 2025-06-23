export function climbStairs(n: number): number {
  if (n <= 2) return n;

  const dp: number[] = new Array(n).fill(0);
  dp[0] = 1; // Base case: 1 way to climb 0 stairs
  dp[1] = 2; // Base case: 2 ways to climb 1 stair (1 step or 2 steps)

  for (let i = 2; i < n; i++) dp[i] = dp[i - 1] + dp[i - 2];

  return dp[n - 1];
}
