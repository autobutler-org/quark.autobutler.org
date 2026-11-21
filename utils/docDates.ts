/**
 * The "Updated <date>" line on a docs page. The date is the doc file's last
 * git commit, read at build time (see `scripts/gitLastModified.ts`).
 */

/** "Updated November 21, 2026", or undefined when the date is unknown or invalid. */
export const updatedLabel = (iso: string | undefined): string | undefined => {
  if (!iso) return undefined;
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return undefined;
  const formatted = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
  return `Updated ${formatted}`;
};

/** The calendar day (YYYY-MM-DD, UTC) of an ISO timestamp, for `<time datetime>` and sitemaps. */
export const isoDay = (iso: string | undefined): string | undefined => {
  if (!iso) return undefined;
  const date = new Date(iso);
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString().slice(0, 10);
};
