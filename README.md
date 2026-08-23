# quark.autobutler.org

The public marketing and documentation site for Quark, built with
[Nuxt](https://nuxt.com) and [`@nuxt/content`](https://content.nuxt.com),
typechecked with `vue-tsc`, and tested with Vitest.

Run `make` to see every target.

```sh
make setup    # install nvm, Node, and dependencies
make serve    # start the Nuxt dev server
make generate # statically generate the deployable site
make test     # run tests
make check    # lint, typecheck, and format checks
make fix      # apply lint and format fixes
```

## Layout

| Path                | What lives there                                                       |
| ------------------- | ---------------------------------------------------------------------- |
| `app.vue`           | Root layout: header, background, `<NuxtPage />`, footer                |
| `pages/`            | Route components (`index.vue`, `docs/index.vue`, `docs/[...slug].vue`) |
| `components/`       | Components and their `__tests__` specs                                 |
| `content/docs/`     | Docs content, authored in Markdown and rendered via `@nuxt/content`    |
| `data/copy.ts`      | Typed landing-page copy and outbound links                             |
| `assets/`           | Global styles and static assets                                        |
| `public/`           | Files copied verbatim into the build                                   |
| `nuxt.config.ts`    | Nuxt configuration (site meta, `@nuxt/content` options)                |
| `content.config.ts` | `@nuxt/content` collection definitions                                 |
| `vitest.config.ts`  | Vitest-only Vite config for mounting components in isolation           |

`~/` and `@/` are aliased to the project root, matching Nuxt's defaults.

## Environment

Copy `.env.example` to `.env` and adjust. Only `NUXT_PUBLIC_`-prefixed variables reach
client code; anything else stays build-time only.

## Deployment

CI generates the static site (`nuxt generate`) and tests it; CD does the same and publishes
`.output/public` to GitHub Pages on pushes to `main`.
