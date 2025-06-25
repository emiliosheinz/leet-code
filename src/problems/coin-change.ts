export function coinChange(coins: number[], amount: number): number {
	const dp = Array.from({ length: amount + 1 }, () => Number.POSITIVE_INFINITY);
	dp[0] = 0;

	for (const coin of coins) {
		for (let i = coin; i < amount + 1; i++) {
			dp[i] = Math.min(dp[i], dp[i - coin] + 1);
		}
	}

	return dp[amount] === Number.POSITIVE_INFINITY ? -1 : dp[amount];
}
