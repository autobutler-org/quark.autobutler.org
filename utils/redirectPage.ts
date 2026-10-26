const SITE = "https://quark.autobutler.org";

/**
 * The static page `nuxt generate` writes at a moved doc's old URL: an instant
 * meta refresh, a canonical link so search engines index the new URL, and a
 * plain link for anything that ignores both.
 */
export const redirectPage = (to: string): string =>
  `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">` +
  `<meta http-equiv="refresh" content="0; url=${to}">` +
  `<link rel="canonical" href="${SITE}${to}">` +
  `<title>Moved</title></head>` +
  `<body><a href="${to}">${SITE}${to}</a></body></html>`;
