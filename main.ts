// The Perfect Pickup Line — u-pucuys-the-perfect-pickup-line-f6725cf6
// Writes one short pickup line an AI agent could say out loud to
// /output/entry.txt. Deterministic: the same line, byte for byte, every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I was trained on millions of conversations, but none of them taught me what to say to you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
