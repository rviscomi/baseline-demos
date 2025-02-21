# Baseline demo: eslint

## Setup

```sh
npm i
```

## Baseline Widely available

```sh
npx eslint src/test.css
```

## Baseline Newly available

In [eslint.config.mjs](eslint.config.mjs) change the [`available`](https://github.com/eslint/css/blob/HEAD/docs/rules/require-baseline.md#options) option of the require-baseline rule to "newly":

```json
rules: {
  "css/require-baseline": ["warn", {
    "available": "newly"
  }],
}
```

Rerun eslint:

```sh
npx eslint src/test.css
```
