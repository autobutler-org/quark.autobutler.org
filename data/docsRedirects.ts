/**
 * Every docs URL that moved when the docs were nested under the Quark app's
 * menu (#222), mapped to where it lives now. `nuxt.config.ts` turns each pair
 * into a `routeRules` redirect and prerenders the old path, so `nuxt generate`
 * writes a static meta-refresh page there for GitHub Pages to serve.
 *
 * Add a pair whenever a published doc moves; never remove one.
 */
export const docsRedirects: Readonly<Record<string, string>> = {
  "/docs/welcome": "/docs/start/welcome",
  "/docs/getting-started": "/docs/start/getting-started",
  "/docs/how-it-works": "/docs/start/how-it-works",
  "/docs/connecting": "/docs/start/connecting",
  "/docs/file-types": "/docs/files/file-types",
  "/docs/google-takeout": "/docs/files/google-takeout",
  "/docs/docs-editor": "/docs/docs",
  "/docs/sheets-formulas": "/docs/sheets/formulas",
  "/docs/storage-and-backups": "/docs/system/storage-and-backups",
  "/docs/accounts": "/docs/users",
  "/docs/remote-access": "/docs/settings/remote-access",
  "/docs/ssh": "/docs/settings/ssh",
  "/docs/versions": "/docs/settings/versions",
  "/docs/security-guide": "/docs/help/security-guide",
  "/docs/accessibility": "/docs/help/accessibility",
  "/docs/keyboard-shortcuts": "/docs/help/keyboard-shortcuts",
  "/docs/self-hosting": "/docs/nerd-notes/self-hosting",
};
