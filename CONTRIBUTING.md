# Contributing

Thanks for wanting to help. Here's how it works.

This repository is the marketing site for
[Quark](https://github.com/autobutler-org/quark). Bugs in the product itself
belong in the [product repository](https://github.com/autobutler-org/quark/issues/new);
this one is for the website.

## Before you start

Make sure your git config (`user.name` and `user.email`) matches your GitHub
profile. **Sign your commits** — here's
[how to set that up](https://gist.github.com/Beneboe/3183a8a9eb53439dbee07c90b344c77e)
if you haven't already. Sign off with `git commit -s`.

Then get the site running:

```sh
make setup   # install nvm, the Node version in .nvmrc, and dependencies
make serve   # Vite dev server with hot reload
```

`make help` lists every target.

## The workflow

1. Branch off `main`
2. Keep your branch up to date with `main`
3. Open a PR with a brief description of what changed and why
4. A maintainer will review it

We do linear commit history. One focused commit per PR is the norm — if you've
got a stack of commits, we'll ask you to squash or rebase them cleanly.
[This post](https://www.bitsnbites.eu/a-tidy-linear-git-history/) explains the
reasoning.

`main` deploys to GitHub Pages automatically. A merge is a publish.

## Commit messages

Clear and concise. Under 80 characters for the subject line. If you need more
context, add a body (120 char line limit).

PR titles use conventional commits: `feat:`, `fix:`, `chore:`, `refactor:`,
`docs:`, `test:`, `perf:`, `style:`. Lowercase, imperative mood. Put the issue
number in the PR body (`Closes #N`), not the title.

## Code style

Run `make check` before you push. If the linter is unhappy, fix it first —
`make fix` handles most of it. Run `make test` too.

CI runs the build and the test suite, and a separate Check workflow runs
`make format` and fails if it produced a diff.

[`AGENTS.md`](AGENTS.md) has the conventions in detail — component structure,
where copy lives, styling rules, and what not to add to the page. It applies to
humans as much as to agents.

## Changing the copy

Every string on the page lives in `src/content/copy.ts`. Edit it there rather
than in component templates.

Only describe features Quark actually ships — check the product repository's
`README.md` and `docs/user-journeys/` first. Don't invent prices, dates, or
availability.

## Found a bug or have an idea?

[Open an issue](https://github.com/autobutler-org/quark.autobutler.org/issues/new/choose).
We read them.
