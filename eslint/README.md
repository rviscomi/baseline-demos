# Baseline demo: eslint

## Setup

```sh
npm i
```

## Baseline Widely available

```sh
npx eslint src/test.css
```

Output:

```sh
/Users/rviscomi/git/baseline-demos/eslint/src/test.css
  10:3  warning  Property 'container-type' is not a widely available baseline feature        css/require-baseline
  19:3  warning  Property 'overflow' is not a widely available baseline feature              css/require-baseline
  21:3  warning  Property 'view-transition-name' is not a widely available baseline feature  css/require-baseline
  36:3  warning  Property 'outline' is not a widely available baseline feature               css/require-baseline
  41:3  warning  Property 'text-wrap' is not a widely available baseline feature             css/require-baseline
```

## Baseline Newly available

In [eslint.config.mjs](eslint.config.mjs) change the [`available`](https://github.com/eslint/css/blob/HEAD/docs/rules/require-baseline.md#options) option of the require-baseline rule to "newly":

```js
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

Output:

```sh
/Users/rviscomi/git/baseline-demos/eslint/src/test.css
  21:3  warning  Property 'view-transition-name' is not a newly available baseline feature  css/require-baseline

✖ 1 problem (0 errors, 1 warning)
```

## Baseline year

In [eslint.config.mjs](eslint.config.mjs) change the [`available`](https://github.com/eslint/css/blob/HEAD/docs/rules/require-baseline.md#options) option of the require-baseline rule to a year in YYYY format:

```js
rules: {
  "css/require-baseline": ["warn", {
    "available": 2023
  }],
}
```

Rerun eslint:

```sh
npx eslint src/test.css
```

Output:

```sh
~/git/baseline-demos/eslint$ npx eslint src/test.css

/Users/rviscomi/git/baseline-demos/eslint/src/test.css
  21:3  warning  Property 'view-transition-name' is not a 2023 available baseline feature  css/require-baseline
  41:3  warning  Property 'text-wrap' is not a 2023 available baseline feature             css/require-baseline

✖ 2 problems (0 errors, 2 warnings)
```
