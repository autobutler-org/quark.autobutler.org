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
