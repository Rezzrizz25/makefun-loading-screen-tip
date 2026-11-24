// Loading Screen Gold entry — one sharp, funny loading-screen tip.
// The tip below is 120 characters (1-200 gate: OK).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TIP =
  "Tip: your agent isn't frozen — it's re-reading your prompt for the fifth time, wondering what you meant. Same, honestly.";

if (TIP.length < 1 || TIP.length > 200 || TIP.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${TIP.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TIP, "utf8");
