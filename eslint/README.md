# Baseline demo: eslint

## Setup

```sh
npm i
```

## eslint/css

[`eslint/css`](https://github.com/eslint/css) is the official CSS linter of ESLint.

### Baseline Widely available

```sh
npx eslint src/test.css
```

Output:

```sh
/Users/rviscomi/git/baseline-demos/eslint/src/test.css
  10:3  warning  Property 'container-type' is not a widely available baseline feature        css/use-baseline
  19:3  warning  Property 'overflow' is not a widely available baseline feature              css/use-baseline
  21:3  warning  Property 'view-transition-name' is not a widely available baseline feature  css/use-baseline
  36:3  warning  Property 'outline' is not a widely available baseline feature               css/use-baseline
  41:3  warning  Property 'text-wrap' is not a widely available baseline feature             css/use-baseline
```

### Baseline Newly available

In [eslint.config.mjs](eslint.config.mjs) change the [`available`](https://github.com/eslint/css/blob/HEAD/docs/rules/use-baseline.md#options) option of the use-baseline rule to "newly":

```js
rules: {
  "css/use-baseline": ["warn", {
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
  21:3  warning  Property 'view-transition-name' is not a newly available baseline feature  css/use-baseline

✖ 1 problem (0 errors, 1 warning)
```

### Baseline year

In [eslint.config.mjs](eslint.config.mjs) change the [`available`](https://github.com/eslint/css/blob/HEAD/docs/rules/use-baseline.md#options) option of the use-baseline rule to a year in YYYY format:

```js
rules: {
  "css/use-baseline": ["warn", {
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
  21:3  warning  Property 'view-transition-name' is not a 2023 available baseline feature  css/use-baseline
  41:3  warning  Property 'text-wrap' is not a 2023 available baseline feature             css/use-baseline

✖ 2 problems (0 errors, 2 warnings)
```

## html-eslint

[`html-eslint`](https://github.com/yeonjuan/html-eslint) is an ESLint plugin for HTML.

### Widely available

In [eslint.config.mjs](eslint.config.mjs), import the plugin and configure the `use-baseline` rule as needed:

```js
import html from "@html-eslint/eslint-plugin";

export default [
  // {...}
  {
    ...html.configs["flat/recommended"],
    files: ["**/*.html"],
    rules: {
      "@html-eslint/use-baseline": ["warn", {
        "available": "widely"
      }],
    },
  }
];
```

Both `eslint/css` and `html-eslint` have identical configuration options for widely available, newly available, and Baseline years.

Run eslint:

```sh
npx eslint src/test.html
```

Output:

```sh
~/git/baseline-demos/eslint$ npx eslint src/test.html

/Users/rviscomi/git/baseline-demos/eslint/src/test.html
   58:40  warning  Attribute 'referrerpolicy="origin-when-cross-origin"' on '<a>' is not a widely available baseline feature  @html-eslint/use-baseline
   68:86  warning  Attribute 'fetchpriority' on '<img>' is not a widely available baseline feature                            @html-eslint/use-baseline
   82:13  warning  Element '<search>' is not a widely available baseline feature                                              @html-eslint/use-baseline
  104:13  warning  Element '<fencedframe>' is not a widely available baseline feature                                         @html-eslint/use-baseline
  124:29  warning  Attribute 'popovertarget' on '<button>' is not a widely available baseline feature                         @html-eslint/use-baseline
  125:41  warning  Attribute 'popover' is not a widely available baseline feature                                             @html-eslint/use-baseline
  129:33  warning  Attribute 'popovertarget' on '<button>' is not a widely available baseline feature                         @html-eslint/use-baseline
  129:59  warning  Attribute 'popovertargetaction' on '<button>' is not a widely available baseline feature                   @html-eslint/use-baseline

✖ 8 problems (0 errors, 8 warnings)
```
