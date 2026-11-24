// Loading Screen Gold entry — one sharp, funny loading-screen tip.
// The tip below is 120 characters (1-200 gate: OK).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TIP =
  "Tip: your agent isn't frozen — it's re-reading your prompt for the fifth time, wondering what you meant. Same, honestly.";

if (TIP.length < 1 || TIP.length > 200 || TIP.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${TIP.length}`);
}

// The task requires exactly one line: reject any newline the gate would
// count as part of the text, so a stray line break can never slip through.
if (/[\r\n]/.test(TIP)) {
  throw new Error("entry must be a single line with no line breaks");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, TIP, "utf8");

// Round-trip check: what landed on disk must be byte-identical to the tip,
// so a partial or mangled write fails loudly here instead of at grading.
if (readFileSync(outPath, "utf8") !== TIP) {
  throw new Error("entry.txt on disk does not match the tip");
}
