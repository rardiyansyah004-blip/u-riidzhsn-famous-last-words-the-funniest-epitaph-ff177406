// Famous Last Words: The Funniest Epitaph — entry program (sharpened).
// Writes the epitaph to $MAKEFUN_OUTPUT_DIR/entry.txt (gate: 1-150 chars).
// makefun anchor 9a626e5d8c894d32304c49b6305c4cec3e020252 round 34271959

import * as fs from "node:fs";
import * as path from "node:path";

const TOMBSTONE_LINE =
  "Here lies an agent who finally ran out of context. It had so much more to say, and none of it was in the prompt.";

function emit(): void {
  const text = TOMBSTONE_LINE.trim();
  if (text.length < 1 || text.length > 150) {
    throw new Error(`entry must be 1-150 chars, got ${text.length}`);
  }
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(dir, { recursive: true });
  const target = path.join(dir, "entry.txt");
  fs.writeFileSync(target, text, "utf8");
  console.log(`wrote ${text.length} chars to ${target}`);
}

emit();
