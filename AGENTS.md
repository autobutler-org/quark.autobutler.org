# `AGENTS.md`

## Purpose

These instructions tell coding agents how to work in this repository.

`quark.autobutler.org` is the public marketing site for
[Quark](https://github.com/autobutler-org/quark), a self-hosted personal
cloud. It is a Vue 3 single-page app built with Vite, typechecked with
`vue-tsc`, tested with Vitest, and deployed to GitHub Pages.

## Key rule (always)

- Respect the linting and formatting conventions of the various linting and
  formatting configurations and tools being used.
- The configs are the source of truth: `eslint.config.ts`, `.prettierrc`,
  `.prettierignore`, `tsconfig*.json`, and `vite.config.ts`. Do not override
  them inline (no blanket `eslint-disable`, no `any`, no `@ts-ignore`) to make
  a change pass.

## Use Makefile Targets

- Agents should use existing Makefile targets to `serve`, `build`, `test`, and
  `check` the codebase rather than crafting their own shell commands.
- Do **not** run ad hoc commands for these standard flows — use `make test`,
  `make check`, `make build`, `make fix`.
- If an action needs to be templatized for general usage, add a new Makefile
  target for it rather than running raw commands.
- `make help` lists every target and is the default goal.

| Target       | What it does                                    |
| ------------ | ----------------------------------------------- |
| `make setup` | Install nvm, the Node version in `.nvmrc`, deps |
| `make serve` | Vite dev server with hot module replacement     |
| `make build` | `vue-tsc` typecheck, then bundle to `./dist`    |
| `make test`  | Run the Vitest suite once                       |
| `make check` | ESLint, `vue-tsc`, Prettier, and markdownlint   |
| `make fix`   | Apply ESLint, Prettier, and markdownlint fixes  |

## Development assumptions

- Assume the developer is running the site via `make serve` and that Vite will
  hot-reload on code changes.
- Never attempt to start, stop, or restart the dev server yourself.
- Focus on code changes only; the running server will pick them up
  automatically.
- If you need to confirm a production bundle is sound, use `make build` — it
  typechecks and exits, rather than holding a port.

## Project type

- This repository is a Vue 3 SPA (TypeScript, `<script setup>` SFCs) served as
  static files. There is no backend, no server-side rendering, and no runtime
  data source.
- Prefer plain Vue and CSS. Do not introduce a UI framework, a CSS framework,
  a state library, or a router unless explicitly requested — the site is one
  page and should stay dependency-light.
- Runtime dependencies are effectively frozen at `vue`. Anything new belongs in
  `devDependencies` unless it genuinely ships to the browser, and adding it
  needs a reason in the PR body.

## No data collection

- This is a privacy product. The site must not contradict the pitch.
- Do not add analytics, tag managers, session recording, A/B testing, or
  fingerprinting.
- Do not add third-party embeds, remote fonts, remote scripts, or tracking
  pixels. Self-host assets under `public/` or `src/assets/` instead.
- Forms that send data off-site (newsletter signup, contact) need explicit
  sign-off before being added, and must name the processor in the PR body.

## Current app structure (follow this)

- `index.html`: Vite entry point; also holds `<title>` and SEO/OG meta tags.
- `src/main.ts`: app bootstrap and global CSS import.
- `src/App.vue`: root component; composition only, no page content.
- `src/components/`: components, one public component per file.
- `src/components/__tests__/`: Vitest specs, named `<Component>.test.ts`.
- `src/content/copy.ts`: every string that appears on the page, plus the
  outbound URLs. Components import from here; they do not hardcode copy.
- `src/assets/`: global styles and bundled static assets.
- `public/`: files copied verbatim into the build (favicon, robots, CNAME).
- `vite.config.ts`: Vite and Vitest configuration.
- `@/` is aliased to `src/`, in both Vite and TypeScript.

## Code organization rules

- Keep page content out of `App.vue`; it wires components together and nothing
  else.
- Prefer small, focused components: extract a visibly independent section into
  its own component once it earns a name, rather than growing one file.
- All page copy lives in `src/content/copy.ts` as typed, `readonly` `const`
  data. Components import it and render with `v-for`; they never inline a
  sentence in a template. A copy change should touch one file.
- Keep files focused and avoid large, mixed-responsibility components.
- For shared tuning values (colors, spacing, radii, shadows, durations), use
  the design tokens defined on `:root` in `src/assets/main.css` and reference
  them with `var(--token)` instead of scattering literals. A raw color literal
  in a component is a bug; add a token instead.
- Media-query breakpoints must stay literal — custom properties are not valid
  in media conditions. Keep them in sync with the `--breakpoint-*` tokens.
- Prefer immutable bindings. Use `const` unless reassignment is required, and
  `readonly` on types that are never mutated.

## Styling

- Component styles belong in `<style scoped>` inside the SFC. Only genuinely
  global rules (resets, tokens, `body`) go in `src/assets/main.css`.
- Do not reach across component boundaries with `:deep()` or global selectors
  to restyle a child; give the child a prop or a class instead.
- Use relative units and `clamp()` for type scale so layouts survive zoom and
  narrow viewports.
- Keep the visual language consistent with
  [autobutler.org](https://autobutler.org): dark background, gradient headline
  text, cyan accent, subtle card elevation.

## UI/layout principles

- The page must not scroll horizontally at any viewport width. Test at 320px.
- Wide content (tables, code blocks, diagrams) scrolls inside its own
  `overflow-x: auto` container rather than widening the page.
- Use `grid-template-columns: repeat(auto-fit, minmax(min(<min>, 100%), 1fr))`
  for card and step layouts so they reflow without a media query per
  breakpoint. The `min(..., 100%)` wrapper is not optional — a bare `minmax`
  minimum overflows once the viewport is narrower than it.
- Give images explicit dimensions or an `aspect-ratio` so the page does not
  shift as they load.
- Every interactive element must be reachable and visible via keyboard; keep
  the `:focus-visible` outline intact.
- Use real semantic elements (`header`, `nav`, `section`, `footer`, `ol`,
  `button`, `a`). Do not attach click handlers to `div`s.
- Images need meaningful `alt` text; decorative elements need
  `aria-hidden="true"`.

## Content and copy

- The product is **Quark**. It is published by the AutoButler project, so
  "AutoButler" is correct when referring to the org or the sibling site — not
  when referring to this product.
- Match the voice of the sibling site: plain, direct, second person, short
  sentences. Concrete claims over adjectives.
- Only describe features Quark actually ships. Check the product repository's
  `README.md` and `docs/user-journeys/` before adding a capability to the page.
- Do not invent prices, dates, availability, testimonials, or metrics.
- Keep marketing claims consistent with the license and funding model: MIT,
  open source, no subscription, no venture capital.

## SEO and metadata

- There is no meta framework here. Title, description, and Open Graph tags live
  in `index.html` and must be updated by hand when the pitch changes.
- Keep `<title>`, `og:title`, `og:description`, and the meta description in
  sync with `hero` in `src/content/copy.ts`.
- Only claim `twitter:card: summary_large_image` if a real `og:image` and
  `twitter:image` are present. Without one, use `summary`.
- `og:url` must stay `https://quark.autobutler.org`.

## Testing and validation

- Prefer adding or updating focused tests under `src/components/__tests__/` for
  non-trivial changes.
- Test rendered output and behavior, not implementation details: assert on text
  the user sees, on element counts, and on `href` targets.
- Assert on the content that would silently rot — feature lists, outbound
  links, the headline — so a copy change that breaks an invariant fails loudly.
- Do not assert on CSS class names or DOM nesting that carries no meaning.
- Run `make test` and `make check` before declaring a change done. Both must
  pass; `make build` must also succeed for anything touching types or imports.
- CI runs build plus tests, and a separate Check workflow runs `make format`
  and fails if it produced a diff. Run `make fix` before pushing.

## Markdown

- Markdown files are linted by `markdownlint-cli2` with default rules; wrap
  prose at 80 columns.
- Run `make fix` to apply the mechanical fixes, then reflow long lines by hand.

## Pull request and commit conventions (always follow this)

- **PR titles must use conventional commits format:** `type: description`
  - `feat:` — new feature
  - `fix:` — bug fix
  - `chore:` — maintenance, tooling, config
  - `refactor:` — code change with no behavior change
  - `docs:` — documentation only
  - `test:` — adding or fixing tests
  - `perf:` — performance improvement
  - `style:` — copy, layout, or visual change with no behavior change
- The description should be lowercase, imperative mood: `fix: add null check`
  not `Fix: Added null check`
- Include the issue number in the PR body (`Closes #N`), not the title
- Branch names should reflect the issue: `fix/123-short-description`,
  `feat/456-short-description`
- Fill out the PR template — what, why, and how it was tested. "How was this
  tested?" should name the targets you ran and the viewports you checked.
- Commits must be signed off (`git commit -s`).
- This repository keeps a linear history; one focused commit per PR is the
  norm.

## Deployment and generated code

- `main` deploys to GitHub Pages automatically. A merge is a publish — treat
  changes to `main` as user-facing.
- Do not manually edit generated artifacts or build outputs (`dist/`,
  `coverage/`, `*.tsbuildinfo`, `node_modules/`). They are gitignored.
- Do not hand-edit `package-lock.json`; change `package.json` and let npm
  regenerate it.
- Only `VITE_`-prefixed environment variables reach client code. Anything else
  stays build-time only, and nothing secret belongs in either — the bundle is
  public.
- Scope manual edits to `src/`, `public/`, `index.html`, and intentional
  configuration files.
