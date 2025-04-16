# Baseline demo: Stylelint

## Setup

```sh
npm i
```

## stylelint-plugin-require-baseline

While Stylelint does not yet have built-in support for Baseline, the [`stylelint-plugin-require-baseline`](https://github.com/ryo-manba/stylelint-plugin-require-baseline) plugin adds a linting rule similar to ESLint's.

The major differences between the linters are:

- the rule is named `require-baseline` while ESLint renamed theirs to `use-baseline`
- the rule only supports newly and widely available targets while ESLint supports Baseline years
- the rule may be missing support for some CSS features like nesting syntax

### Baseline Widely available

```sh
npx stylelint src/test.css
```

Output:

```sh
src/test.css
   7:3   ✖  Property "container-type" is not a widely available baseline feature. (plugin/require-baseline)
   8:3   ✖  Property "accent-color" is not a widely available baseline feature. (plugin/require-baseline)
  14:3   ✖  Property "overflow" is not a widely available baseline feature. (plugin/require-baseline)
  15:3   ✖  Property "view-transition-name" is not a widely available baseline feature. (plugin/require-baseline)
  16:3   ✖  Property "font-language-override" is not a widely available baseline feature. (plugin/require-baseline)
  29:11  ✖  Selector "has" is not a widely available baseline feature. (plugin/require-baseline)
  30:3   ✖  Property "outline" is not a widely available baseline feature. (plugin/require-baseline)
  34:3   ✖  Property "text-wrap" is not a widely available baseline feature. (plugin/require-baseline)
  42:3   ✖  Property "anchor-name" is not a widely available baseline feature. (plugin/require-baseline)

✖ 9 problems (9 errors, 0 warnings)
```

### Baseline Newly available

In [.stylelintrc.json](.stylelintrc.json) change the `available` option of the require-baseline rule to "newly":

```js
"rules": {
  "plugin/require-baseline": [
    true,
    {
      "available": "newly"
    }
  ]
}
```

Rerun Stylelint:

```sh
npx stylelint src/test.css
```

Output:

```sh
src/test.css
   8:3  ✖  Property "accent-color" is not a newly available baseline feature. (plugin/require-baseline)
  15:3  ✖  Property "view-transition-name" is not a newly available baseline feature. (plugin/require-baseline)
  16:3  ✖  Property "font-language-override" is not a newly available baseline feature. (plugin/require-baseline)
  42:3  ✖  Property "anchor-name" is not a newly available baseline feature. (plugin/require-baseline)
```
