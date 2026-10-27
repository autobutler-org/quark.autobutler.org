/**
 * Every string that appears on the page lives here, so copy changes happen in
 * one file rather than across component templates.
 */

export interface Link {
  readonly label: string;
  readonly href: string;
}

export interface Feature {
  readonly name: string;
  readonly body: string;
  /** Shown next to the name, matching the marker the app puts on the feature. */
  readonly badge?: string;
  /** Not in the app yet: drawn as a dashed, recessed card so it never reads as shipped. */
  readonly upcoming?: boolean;
  /** A small decorative sketch for a lead card in the bento grid. */
  readonly illustration?: "files" | "photos";
}

export interface Step {
  readonly title: string;
  readonly body: string;
}

/** One row of a label/value list, e.g. the hero's fact sheet. */
export interface Fact {
  readonly label: string;
  readonly value: string;
}

/** A paragraph that ends in a link, e.g. "... for transparency." */
export interface LinkedNote {
  readonly link: Link;
  readonly trailing: string;
}

export const repoUrl = "https://github.com/autobutler-org/quark";
export const orgSiteUrl = "https://autobutler.org";

export const masthead = {
  wordmark: "Quark",
  links: [
    { label: "Docs", href: "/docs" },
    { label: "Support", href: "/support" },
    { label: "Source", href: repoUrl },
    { label: "AutoButler", href: orgSiteUrl },
  ] as readonly Link[],
  /** Rendered apart from the other links, as the one solid button in the bar. */
  cta: { label: "Sign up", href: "/signup" } as Link,
  menuLabel: "Menu",
} as const;

export const hero = {
  /**
   * Decorative: the "Quark" wordmark in the masthead already names the brand,
   * so an alt here would only repeat it. Hence the empty alt.
   */
  logo: { src: "/quark.png", alt: "" },
  headline: "Your family home base",
  subhead: "A private home cloud that plugs into your router.",
  lede:
    "Quark is a small box that gives you your own cloud at home. Keep photos, files, and " +
    "documents on its built-in storage, or add a USB drive for more room.",
  primary: { label: "Sign up", href: "/signup" } as Link,
  secondary: { label: "See how it works", href: "#how" } as Link,
  /**
   * Plain facts about the product and the business, set like a spec sheet
   * beside the headline. Each one is backed by copy further down the page.
   */
  factsLabel: "Quark at a glance",
  facts: [
    { label: "Subscription", value: "None" },
    { label: "Your files live", value: "On storage in your home" },
    { label: "Internet", value: "Not needed at home" },
    { label: "Source code", value: "Public, MIT-0" },
    { label: "Funding", value: "Customers, not investors" },
  ] as readonly Fact[],
} as const;

/** One picture in the shell gallery. Width and height are the file's own, so the page does not shift. */
export interface Slide {
  readonly src: string;
  readonly alt: string;
  readonly caption: string;
  readonly width: number;
  readonly height: number;
}

/**
 * Renders of the cases we are designing for the device. They are concept
 * studies, not a product photo; `footer.renderNote` says so at the bottom of
 * the page.
 */
export const shellGallery = {
  eyebrow: "The case",
  heading: "A box that belongs on a shelf.",
  previousLabel: "Previous picture",
  nextLabel: "Next picture",
  slides: [
    {
      src: "/assets/product/shell/pavilion-walnut-cane-wide.webp",
      alt: "A walnut box with curved ribs over woven cane, standing on its side on a wooden shelf.",
      caption: "Pavilion — walnut and cane",
      width: 1600,
      height: 900,
    },
    {
      src: "/assets/product/shell/wave-lattice-walnut-detail.webp",
      alt: "Close-up of a walnut lattice that rises and falls in a wave across the top of the box.",
      caption: "Wave Lattice — walnut",
      width: 1600,
      height: 1280,
    },
    {
      src: "/assets/product/shell/branches-walnut-linen-wide.webp",
      alt: "A walnut box with branch-shaped cutouts over linen, standing on its side on a wooden shelf.",
      caption: "Branches — walnut and linen",
      width: 1600,
      height: 900,
    },
    {
      src: "/assets/product/shell/pavilion-walnut-cane-detail.webp",
      alt: "Close-up of curved walnut ribs over a woven cane panel.",
      caption: "Pavilion — walnut and cane",
      width: 1600,
      height: 1280,
    },
    {
      src: "/assets/product/shell/wave-lattice-walnut-wide.webp",
      alt: "A walnut box with a wave-shaped lattice on top, standing on its side on a wooden shelf.",
      caption: "Wave Lattice — walnut",
      width: 1600,
      height: 900,
    },
    {
      src: "/assets/product/shell/branches-walnut-linen-detail.webp",
      alt: "Close-up of branch-shaped openings in walnut, with linen showing through.",
      caption: "Branches — walnut and linen",
      width: 1600,
      height: 1280,
    },
    {
      src: "/assets/product/shell/streamlines-birch-linen-wide.webp",
      alt: "A birch box whose slats curve around a linen disc and a glowing wooden stone, standing on its side on a wooden shelf.",
      caption: "Streamlines — birch and linen",
      width: 1600,
      height: 900,
    },
  ] as readonly Slide[],
} as const;

export const manifesto = {
  eyebrow: "01 — Why Quark",
  heading: "The convenience of the cloud, the privacy of your home.",
  paragraphs: [
    "Keep your photos, documents, and other files on storage in your home. Quark gives you " +
      "the convenience of a cloud without renting storage or adding another subscription.",
    "By default, Quark works on your home network without the internet. Remote access stays " +
      "off until an admin turns it on in Settings → Network. Once it is on, the iPhone and " +
      "Android apps can reach Quark away from home. Browsers still work only on your home WiFi.",
    "Quark has no analytics or tracking. Your files stay on your own storage, so we don't " +
      "receive them. We don't take venture capital either; customers fund the work. The code " +
      "is public, so anyone can inspect it.",
  ] as readonly string[],
  funding: "No venture capital. Funded by customers.",
  openSource: {
    link: { label: "Open source, for transparency.", href: repoUrl },
    trailing: " All of the code is public, and anyone can inspect it.",
  } as LinkedNote,
} as const;

export const howItWorks = {
  eyebrow: "02 — Setup",
  heading: "Three steps, then it runs itself.",
  steps: [
    {
      title: "Plug it in",
      body:
        "The device goes into a free ethernet port on your router. Power it on and it " +
        "joins the network.",
    },
    {
      title: "Attach storage",
      body:
        "Quark has built-in storage. Connect a supported external USB drive when you want " +
        "more room, and replace it with a larger one later if you need to.",
    },
    {
      title: "Open the app",
      body:
        "Install the app on your phone, or just visit the address in a browser. Browse your " +
        "files, and upload the photos you pick.",
    },
  ] as readonly Step[],
} as const;

export const features = {
  eyebrow: "03 — In the app",
  heading: "What you get",
  lede: "The apps that run on your Quark, against the files on your own drive.",
  items: [
    {
      name: "Files",
      illustration: "files",
      body:
        "Browse, upload, and organize everything on the drive from any device on the " +
        "network. Drag a folder in from your laptop, pull it down on your phone.",
    },
    {
      name: "Photos",
      illustration: "photos",
      body:
        "Albums, favorites, and full-resolution originals on your own drive — not a " +
        "compressed copy someone else keeps. Upload the photos you pick, from your phone or a browser.",
    },
    {
      name: "Documents",
      body:
        "Write and edit documents in the browser. The file sits on your drive the whole " +
        "time, so there is nothing to export when you want it back.",
    },
    {
      name: "Spreadsheets",
      body:
        "Create and edit budgets, inventories, and anything else you track. The files stay " +
        "on your Quark, and no outside account is required.",
    },
    {
      name: "Books",
      body:
        "Find the PDF and EPUB files on Quark's built-in storage in one place, then open " +
        "them in the file viewer.",
    },
    {
      name: "Vault",
      body:
        "A password manager on your Quark. Every account has its own vault, opened with " +
        "the password you sign in with, and nobody else can open it, not even an admin.",
    },
    {
      name: "Accounts and sharing",
      body:
        "Everyone in the house gets their own account and a space that is private from the " +
        "other members. Share a folder with a person or the whole household. Admins can " +
        "open files on the Quark, but not another person's vault or a chat they are not in.",
    },
    {
      name: "Remote access",
      body:
        "Use the iPhone and Android apps to reach your Quark away from home. It stays off " +
        "until an admin turns it on in Settings → Network. Browsers still work only on your " +
        "home WiFi, and your files are not copied to us.",
    },
    {
      name: "Search",
      body:
        "Find files by name. In documents, spreadsheets, and presentations, you can also " +
        "search what is written inside them.",
    },
    {
      name: "Trash",
      body:
        "Deleting something puts it in Trash for 30 days before Quark removes it for good. " +
        "Until then, you can put it back.",
    },
    {
      name: "Video and audio",
      body:
        "Play what is on the drive in the browser. Trim a clip, save a still frame, or " +
        "rewrap a video in another container, like MKV to MP4, without re-encoding it.",
    },
    {
      name: "Apps for your phone",
      body:
        "iPhone and Android apps that find your Quark on your WiFi, so there is no address " +
        "to type. The apps are currently in testing.",
    },
    {
      name: "System",
      body:
        "See how much space is left, which drives are attached, and what the Quark is busy " +
        "with, without reading a log file.",
    },
    /* Chat and Calendar are on by default and have no Beta marker in Quark v0.56.2. */
    {
      name: "Chat",
      body:
        "Messaging for your household, end-to-end encrypted. The Quark stores messages it " +
        "cannot read. Take someone's access away and the channel's key is replaced.",
    },
    {
      name: "Calendar",
      body:
        "One calendar the whole household shares, on your own hardware. Day, week and month " +
        "views, repeating events, and reminders that show up in the app.",
    },
  ] as readonly Feature[],
} as const;

export const callToAction = {
  eyebrow: "04 — Own it",
  heading: "The cloud, in your home.",
  body:
    "Instead of renting storage in someone else's data center, you keep it at home. Add a " +
    "drive, replace it with a larger one, or take it out. The hardware and the data are yours.",
  /**
   * Deliberately not GitHub: like the hero's primary button, this is a
   * sign-up for a non-technical reader, and the repo is not where they start.
   * The masthead's "Source" link is the intentional GitHub entry point.
   */
  action: { label: "Get started", href: "/signup" } as Link,
} as const;

/**
 * Same Mailchimp list as autobutler.org's homepage — one list, more places to
 * join it. Unlike autobutler.org, this form does not load Mailchimp's remote
 * CSS/JS bundle: it's a plain HTML form post, styled locally with our own
 * tokens. Mailchimp still validates and processes the submission server-side
 * without the client-side script.
 */
export const newsletter = {
  heading: "Want updates?",
  body: "Leave your email and we will write when there is news about Quark.",
  emailLabel: "Email address",
  poweredBy: "Powered by Mailchimp",
  action:
    "https://autobutler.us5.list-manage.com/subscribe/post?u=83e0cf2d6edd852308ba6671f&id=a3382ba074&f_id=00a0c2e1f0",
  honeypotName: "b_83e0cf2d6edd852308ba6671f_a3382ba074",
  submitLabel: "Subscribe",
} as const;

export interface HelpLink {
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly external?: boolean;
}

export const support = {
  heading: "Support",
  helpHeading: "Need help?",
  helpIntro: "Check our documentation first — most questions are answered there.",
  /**
   * Ordered as a support funnel: set it up, move your data in, fix a problem,
   * then ask a human. Exactly one entry points at GitHub — a second one only
   * split the same destination across two cards.
   */
  helpLinks: [
    {
      title: "Getting Started",
      description: "Set up your Quark for the first time",
      href: "/docs/start/getting-started",
    },
    {
      title: "Moving from Google",
      description: "Bring your photos and files over with Google Takeout",
      href: "/docs/files/google-takeout",
    },
    {
      title: "Troubleshooting",
      description: "Common issues and how to fix them",
      href: "/docs/help",
    },
    {
      title: "GitHub Issues",
      description: "Ask questions and report problems",
      href: `${repoUrl}/issues`,
      external: true,
    },
  ] as readonly HelpLink[],
  reportHeading: "Report an issue",
  reportIntroPrefix: "Found a bug? Send it to our GitHub issue tracker. For a feature request, use",
  featureRequestLink: {
    label: "the feature request form",
    href: `${repoUrl}/issues/new?template=feature.yaml`,
  } as Link,
  reportIntroSuffix: ".",
  githubIssuesUrl: `${repoUrl}/issues/new`,
  form: {
    titleLabel: "Bug title *",
    titlePlaceholder: "A short description of the problem",
    componentLabel: "Where did it happen?",
    componentOptions: [
      "N/A",
      "Files",
      "Photos",
      "Calendar",
      "Docs",
      "Sheets",
      "Slides",
      "Books",
      "Chat",
      "Vault",
      "Trash",
      "System",
      "Users",
      "Settings",
      "Remote access",
      "Phone app",
      "General UI",
      "Server",
    ] as readonly string[],
    whatHappenedLabel: "What happened? *",
    whatHappenedPlaceholder: "Describe what happened and what you expected instead",
    browsersLabel: "Browsers",
    browserOptions: ["Firefox", "Chrome", "Safari", "Microsoft Edge", "Other"] as readonly string[],
    urlLabel: "Page address",
    urlPlaceholder: "The address of the page where it happened",
    logsLabel: "Error messages or logs",
    logsPlaceholder: "Paste any error messages or logs here",
    submitLabel: "Open GitHub Issue",
  },
} as const;

export const signup = {
  heading: "Sign up for early access",
  intro:
    "Quark opens to friends and family in early 2027. Join the email list and we'll let you know when early access begins.",
  launch: {
    badge: "Friends & family — early 2027",
    body: "Join the waitlist for Quark. At-cost friends-and-family first; public when it's ready.",
  },
} as const;

export const docsIndex = {
  heading: "Documentation",
  lede: "Everything you need to set up, use, and understand Quark.",
  searchLabel: "Search the docs",
  searchPlaceholder: "Search titles and page text",
  clearLabel: "Clear search",
  resultsHeading: "Results",
  noResults: "No docs match that search.",
  /**
   * A function rather than a string so the plural stays in this file with the
   * rest of the copy instead of being assembled in the template.
   */
  resultCount: (count: number): string => (count === 1 ? "1 doc matches" : `${count} docs match`),
} as const;

/** Labels in the docs sidebar on every doc page. */
export const docsNavLabels = {
  all: "All docs",
  /** The button that opens the sidebar as a drawer on narrow screens. */
  menu: "Docs menu",
} as const;

/** Shown by the root `error.vue` for any thrown error, including a missing doc. */
export const errorPage = {
  notFoundHeading: "Page not found",
  notFoundBody: "There's nothing at this address. It may have moved, or the link may be wrong.",
  errorHeading: "Something went wrong",
  errorBody: "This page failed to load. Try again, or head somewhere else.",
  links: [
    { label: "Home", href: "/" },
    { label: "Documentation", href: "/docs" },
  ] as readonly Link[],
} as const;

export const footer = {
  note: "Quark is built by AutoButler. MIT-0 licensed.",
  /** Fine print for the case renders in `shellGallery`, kept low on the page. */
  renderNote: "Case pictures are concept renders. The designs are not final.",
  links: [
    { label: "GitHub", href: repoUrl },
    { label: "Contributing", href: `${repoUrl}/blob/main/CONTRIBUTING.md` },
    { label: "autobutler.org", href: orgSiteUrl },
  ] as readonly Link[],
} as const;
