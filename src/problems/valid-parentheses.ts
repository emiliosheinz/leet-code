export function isValid(s: string): boolean {
	const charMapping: Record<string, string> = { "(": ")", "[": "]", "{": "}" };
	const expectedCloseStack = [];

	for (const c of s) {
		if (charMapping[c]) {
			expectedCloseStack.push(charMapping[c]);
		} else {
			if (c !== expectedCloseStack.pop()) {
				return false;
			}
		}
	}

	return expectedCloseStack.length === 0;
}
