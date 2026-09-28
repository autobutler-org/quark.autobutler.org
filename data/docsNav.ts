/**
 * Docs information architecture — sidebar folders, task cards, and secondary
 * links. Paths must match Nuxt Content routes under content/docs/.
 */

export interface DocsNavPage {
  readonly title: string;
  readonly path: string;
  readonly softLaunch?: boolean;
  readonly comingSoon?: boolean;
}

export interface DocsNavFolder {
  readonly id: string;
  readonly title: string;
  readonly pages: readonly DocsNavPage[];
  /** Visually demoted; collapsed by default in the sidebar. */
  readonly demoted?: boolean;
}

export interface DocsTaskCard {
  readonly title: string;
  readonly outcome: string;
  readonly path: string;
  readonly softLaunch?: boolean;
  readonly comingSoon?: boolean;
}

export interface DocsSecondaryLink {
  readonly title: string;
  readonly outcome: string;
  readonly path: string;
}

export const docsNavFolders: readonly DocsNavFolder[] = [
  {
    id: "start-here",
    title: "Start here",
    pages: [
      { title: "Welcome", path: "/docs/start-here/welcome" },
      { title: "Set up Quark", path: "/docs/start-here/getting-started" },
      { title: "How Quark works", path: "/docs/start-here/how-it-works" },
    ],
  },
  {
    id: "things-you-can-do",
    title: "Things you can do",
    pages: [
      {
        title: "Back up photos",
        path: "/docs/things-you-can-do/photos",
        softLaunch: true,
      },
      {
        title: "Bring photos from Google",
        path: "/docs/things-you-can-do/google-takeout",
      },
      { title: "Work with files", path: "/docs/things-you-can-do/files" },
      {
        title: "Write docs & sheets",
        path: "/docs/things-you-can-do/docs-sheets",
        softLaunch: true,
      },
      {
        title: "Keep private files safe",
        path: "/docs/things-you-can-do/vault",
        softLaunch: true,
      },
      {
        title: "Invite family",
        path: "/docs/things-you-can-do/invite-family",
        comingSoon: true,
      },
      {
        title: "Set a reminder",
        path: "/docs/things-you-can-do/set-a-reminder",
        comingSoon: true,
      },
    ],
  },
  {
    id: "if-something-goes-wrong",
    title: "If something goes wrong",
    pages: [
      {
        title: "Help & troubleshooting",
        path: "/docs/if-something-goes-wrong/help",
      },
    ],
  },
  {
    id: "nerd-notes",
    title: "Nerd Notes",
    demoted: true,
    pages: [
      { title: "Overview", path: "/docs/nerd-notes/overview" },
      { title: "Security (deep)", path: "/docs/nerd-notes/security-guide" },
    ],
  },
] as const;

/** Large “What do you want to do?” cards on /docs. */
export const docsTaskCards: readonly DocsTaskCard[] = [
  {
    title: "Back up my photos",
    outcome: "Upload the pictures you pick from your phone on home WiFi.",
    path: "/docs/things-you-can-do/photos",
    softLaunch: true,
  },
  {
    title: "Bring photos from Google",
    outcome: "Export with Google Takeout and put them on your Quark.",
    path: "/docs/things-you-can-do/google-takeout",
  },
  {
    title: "Manage my files",
    outcome: "Browse, upload, and organize folders on your drive.",
    path: "/docs/things-you-can-do/files",
  },
  {
    title: "Write a document",
    outcome: "Start a doc or spreadsheet that stays on your hardware.",
    path: "/docs/things-you-can-do/docs-sheets",
    softLaunch: true,
  },
  {
    title: "Keep something private",
    outcome: "Store passwords in Vault with a master password you choose.",
    path: "/docs/things-you-can-do/vault",
    softLaunch: true,
  },
  {
    title: "Invite someone in my family",
    outcome: "Household sharing is on the way — see what’s planned.",
    path: "/docs/things-you-can-do/invite-family",
    comingSoon: true,
  },
  {
    title: "Set a reminder",
    outcome: "Calendar reminders are coming soon.",
    path: "/docs/things-you-can-do/set-a-reminder",
    comingSoon: true,
  },
] as const;

/** Secondary strip under the task cards. */
export const docsSecondaryLinks: readonly DocsSecondaryLink[] = [
  {
    title: "Set up Quark",
    outcome: "Plug in, open the address, create your account.",
    path: "/docs/start-here/getting-started",
  },
  {
    title: "Something’s wrong",
    outcome: "Troubleshooting and how to reach us.",
    path: "/docs/if-something-goes-wrong/help",
  },
  {
    title: "I’m technical",
    outcome: "Stack, install, and deeper security notes.",
    path: "/docs/nerd-notes/overview",
  },
] as const;

/** Old flat URLs → nested paths (soft-launch bookmarks / support links). */
export const docsPathRedirects: Readonly<Record<string, string>> = {
  "/docs/welcome": "/docs/start-here/welcome",
  "/docs/getting-started": "/docs/start-here/getting-started",
  "/docs/how-it-works": "/docs/start-here/how-it-works",
  "/docs/photos": "/docs/things-you-can-do/photos",
  "/docs/google-takeout": "/docs/things-you-can-do/google-takeout",
  "/docs/vault": "/docs/things-you-can-do/vault",
  "/docs/help": "/docs/if-something-goes-wrong/help",
  "/docs/nerd-notes": "/docs/nerd-notes/overview",
  "/docs/security-guide": "/docs/nerd-notes/security-guide",
};

/** Paths under “Things you can do” get a search score boost. */
export const isDocsTaskPath = (path: string): boolean =>
  path.startsWith("/docs/things-you-can-do/");
