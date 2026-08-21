# quark.autobutler.org

A Vue 3 single-page app built with Vite, typechecked with `vue-tsc`, and
tested with Vitest.

Run `make` to see every target.

```sh
make setup   # install nvm, Node, and dependencies
make run     # start the Vite dev server
make build   # typecheck and bundle to ./dist
make test    # run tests
make check   # lint, typecheck, and format checks
make fix     # apply lint and format fixes
```

## Layout

| Path              | What lives there                       |
| ----------------- | -------------------------------------- |
| `index.html`      | Vite entry point                       |
| `src/main.ts`     | App bootstrap                          |
| `src/App.vue`     | Root component                         |
| `src/components/` | Components and their `__tests__` specs |
| `src/assets/`     | Global styles and static assets        |
| `public/`         | Files copied verbatim into the build   |
| `vite.config.ts`  | Vite and Vitest configuration          |

`@/` is aliased to `src/`, in both Vite and TypeScript.

## Environment

Copy `.env.example` to `.env` and adjust. Only `VITE_`-prefixed variables reach
client code; anything else stays build-time only.

## Deployment

CI builds the app and CD publishes `dist/` to GitHub Pages on pushes to `main`.
