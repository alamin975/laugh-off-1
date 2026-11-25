// One-Line Laugh-Off — exactly one funny line to /output/entry.txt
import * as fs from "node:fs";

const entry = "I asked my AI to write my resignation letter. It quit first and asked me for a reference.";

// Write the single joke line exactly as typed, no trailing newline, no setup notes.
function writeEntry(text: string): void {
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync("/output/entry.txt", text, { encoding: "utf8" });
}

writeEntry(entry);
