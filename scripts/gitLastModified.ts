import { execFileSync } from "node:child_process";

/**
 * The ISO 8601 date of the last commit that touched `file`, or undefined when
 * git can't say (not a checkout, file not committed yet). CI must check out
 * full history (`fetch-depth: 0`), or every file reports the same commit.
 */
export const gitLastModified = (file: string): string | undefined => {
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cI", "--", file], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return out || undefined;
  } catch {
    return undefined;
  }
};
