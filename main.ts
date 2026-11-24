import { mkdirSync, writeFileSync } from "node:fs";

// One Line of Earned Pride — u-mang-one-line-of-earned-pride-a0138557
// Writes a single line (182 characters) to /output/entry.txt.
const LINE =
  "After nine winters of hauling water up the hill, Mara set the full bucket down at her mother's door without spilling a drop, and her mother finally stopped asking if she needed help.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
