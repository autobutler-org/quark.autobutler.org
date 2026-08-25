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
}

export interface ShowcaseImage {
  readonly src: string;
  readonly alt: string;
}

export interface Step {
  readonly title: string;
  readonly body: string;
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
} as const;

export const hero = {
  /**
   * Decorative: the "Quark" wordmark in the masthead already names the brand,
   * so an alt here would only repeat it. Hence the empty alt.
   */
  logo: { src: "/quark.png", alt: "" },
  headline: "Data autonomy for everyone.",
  lede:
    "Quark is a small box that turns a USB drive into your own cloud. Photos, " +
    "files, and documents, on hardware you own, in a room you can walk into.",
  primary: { label: "Read the code", href: repoUrl } as Link,
  secondary: { label: "See how it works", href: "#how" } as Link,
} as const;

export const productShowcase = {
  images: [
    { src: "/assets/product/files.webp", alt: "Browsing files and photos in Quark's file browser" },
    { src: "/assets/product/casing.webp", alt: "The Quark device" },
  ] as readonly ShowcaseImage[],
} as const;

export const manifesto = {
  heading: "The convenience of the cloud, the privacy of your home.",
  paragraphs: [
    "Every photo you take and every document you write ends up on a hard drive in a " +
      "building you have never visited, owned by a company that charges you rent for the " +
      "privilege and reads your files to train something. Quark is the other option. It is " +
      "plug-and-play, there is no subscription, and no model is trained on your family photos.",
    "You buy the hardware once. Your data is backed up automatically and never leaves the " +
      "house. If you want a copy somewhere else, you make one — mail a drive to your " +
      "grandmother, keep a second one at work, whatever you decide. Nobody makes that choice " +
      "for you.",
    "And when you want out, there is no export process, no download-your-data request, no " +
      "waiting for an archive to be prepared. You unplug the drive.",
  ] as readonly string[],
  funding: "No venture capital. Funded by ordinary people who wanted this to exist.",
  openSource: {
    link: { label: "Completely open source, for transparency.", href: repoUrl },
    trailing: " All of the code is public, and anyone can read it.",
  } as LinkedNote,
} as const;

export const howItWorks = {
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
        "Any external USB drive works. Use the one in your desk drawer, or buy a bigger " +
        "one later and add it.",
    },
    {
      title: "Open the app",
      body:
        "Install the app on your phone, or just visit the address in a browser. Photos " +
        "start backing up on their own.",
    },
  ] as readonly Step[],
  footnote:
    "It runs on a Raspberry Pi or any Linux box you already have. The server is Go, the " +
    "app is Flutter, and the database is a single SQLite file on your drive.",
} as const;

export const features = {
  heading: "What you get",
  items: [
    {
      name: "Files",
      body:
        "Browse, upload, and organize everything on the drive from any device on the " +
        "network. Drag a folder in from your laptop, pull it down on your phone.",
    },
    {
      name: "Photos",
      body:
        "Your camera roll backs itself up as soon as you get home. Albums, favorites, and " +
        "full-resolution originals — not a compressed copy someone else keeps.",
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
        "Budgets, inventories, whatever you track. Same editor, same storage, no account " +
        "required.",
    },
    {
      name: "Vault",
      body:
        "A password manager that lives on your hardware. Encrypted on the drive, unlocked " +
        "with a password only you have.",
    },
    {
      name: "Health",
      body:
        "See how much space is left, which drives are attached, and whether anything needs " +
        "attention, without reading a log file.",
    },
  ] as readonly Feature[],
} as const;

export const callToAction = {
  heading: "The cloud, in your home.",
  body:
    "Instead of renting a slice of someone else's data center, you own the whole thing. Pay " +
    "for a repair or an upgrade, or do it yourself. Add a drive, swap a drive, take one out. " +
    "It is yours to manage as you please.",
  action: { label: "Get started on GitHub", href: repoUrl } as Link,
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
  poweredBy: "Powered by Mailchimp",
  action:
    "https://autobutler.us5.list-manage.com/subscribe/post?u=83e0cf2d6edd852308ba6671f&id=a3382ba074&f_id=00a0c2e1f0",
  honeypotName: "b_83e0cf2d6edd852308ba6671f_a3382ba074",
  submitLabel: "Subscribe",
} as const;

export interface HelpLink {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly external?: boolean;
}

export const support = {
  heading: "Support",
  helpHeading: "Need help?",
  helpIntro: "Check our documentation first — most questions are answered there.",
  helpLinks: [
    {
      icon: "🚀",
      title: "Getting Started",
      description: "Set up your Quark for the first time",
      href: "/docs/getting-started",
    },
    {
      icon: "🛠️",
      title: "Troubleshooting",
      description: "Common issues and how to fix them",
      href: "/docs/help",
    },
    {
      icon: "💬",
      title: "GitHub Issues",
      description: "Ask questions and report problems",
      href: `${repoUrl}/issues`,
      external: true,
    },
    {
      icon: "🐙",
      title: "GitHub",
      description: "Browse source, file issues, and contribute",
      href: repoUrl,
      external: true,
    },
  ] as readonly HelpLink[],
  reportHeading: "Report an issue",
  reportIntroPrefix:
    "Found a bug? Report it directly to our GitHub issue tracker. Or, if you have a feature request, head to",
  featureRequestLink: {
    label: "our feature request page",
    href: `${repoUrl}/issues/new?template=feature.yaml`,
  } as Link,
  reportIntroSuffix: ".",
  githubIssuesUrl: `${repoUrl}/issues/new`,
  form: {
    titleLabel: "Bug/Feature Title *",
    titlePlaceholder: "Brief description of the bug",
    componentLabel: "Component(s) Affected",
    componentOptions: [
      "N/A",
      "Files",
      "Photos",
      "Documents",
      "Spreadsheets",
      "Vault",
      "Health",
      "General UI",
      "Backend",
    ] as readonly string[],
    whatHappenedLabel: "What happened? *",
    whatHappenedPlaceholder: "Describe the bug and what you expected to happen...",
    browsersLabel: "Browser(s)",
    browserOptions: ["Firefox", "Chrome", "Safari", "Microsoft Edge", "Other"] as readonly string[],
    urlLabel: "URL of Problem",
    urlPlaceholder: "https://example.com or local URL",
    logsLabel: "Relevant Log Output",
    logsPlaceholder: "Paste any error messages or logs here...",
    submitLabel: "Open GitHub Issue",
  },
} as const;

export const docsIndex = {
  heading: "Documentation",
  lede: "Everything you need to set up, use, and understand Quark.",
} as const;

export const footer = {
  note: "Quark is built by the AutoButler project. MIT-0 licensed.",
  links: [
    { label: "GitHub", href: repoUrl },
    { label: "Contributing", href: `${repoUrl}/blob/main/CONTRIBUTING.md` },
    { label: "autobutler.org", href: orgSiteUrl },
  ] as readonly Link[],
} as const;
