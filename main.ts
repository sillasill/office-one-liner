import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke: a Monday meeting, a real office detail, punch on the final beat.
// Deterministic by construction: no clock, no randomness, no network, same output every run.
const TEXT = "Our Monday meeting opens with a five-minute apology for the meeting, then a ten-minute recap of the meeting we had about the meeting.";
const MAX_CHARS = 199;

if (TEXT.length < 1 || TEXT.length > MAX_CHARS) throw new Error("entry length out of range");
if (TEXT.includes("\n") || TEXT.includes("\r")) throw new Error("entry must be a single line");
if (TEXT.trim() !== TEXT || TEXT.trim().length === 0) throw new Error("entry must not be blank or padded");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
