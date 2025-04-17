import * as fs from "node:fs";
import * as path from "node:path";

const rootDir = "src";
const categories = ["algorithms", "data-structures", "problems"] as const;
const readmePath = "README.md";

function generateReadme() {
	const tables: Record<(typeof categories)[number], string> = {
		algorithms: "",
		problems: "",
		"data-structures": "",
	};

	for (const category of categories) {
		const categoryPath = path.join(rootDir, category);
		let table =
			"|            Title            |          Code Path          |\n";
		table += "|-----------------------------|-----------------------------|\n";

		if (fs.existsSync(categoryPath)) {
			const files = fs.readdirSync(categoryPath);
			for (const file of files) {
				if (!isTestFile(file)) {
					const name = path
						.basename(file, path.extname(file))
						.replace(/-/g, " ")
						.replace(/^\w/, (c) => c.toUpperCase());
					table += `| ${name} | [${file}](${categoryPath}/${file}) |\n`;
				}
			}
		}
		tables[category] = table;
	}

	const readmeContent = `
# LeetCode Solutions

Welcome to my repository of solutions to problems from [LeetCode](https://leetcode.com)!

This repository is organized into folders by **algorithms**, **data structures**, and problem categories. Each folder contains my implementations and solutions written in **TypeScript**.

## Project Structure

The project is structured as follows:

- **Data Structures** - Custom implementations or uses of data structures.
- **Algorithms** - Implementations of popular algorithms.
- **Problems** - Solutions to various LeetCode problems.

## Data Structures

${tables["data-structures"]}

## Algorithms

${tables.algorithms}

## Problems

${tables.problems}
`;

	fs.writeFileSync(readmePath, readmeContent.trim());
	console.log("README.md generated successfully!");
}

function isTestFile(fileName: string): boolean {
	return fileName.endsWith(".test.ts") || fileName.endsWith(".spec.ts");
}

generateReadme();
