# compute-baseline

## Setup

```sh
npm i
```

## Get the Baseline status for a BCD key

Run the script:

```sh
node index.mjs
```

Output:

```json
{
  "baseline": "high",
  "baseline_low_date": "≤2020-07-28",
  "baseline_high_date": "≤2023-01-28",
  "support": {
    "chrome": "≤80",
    "chrome_android": "≤80",
    "edge": "≤80",
    "firefox": "≤72",
    "firefox_android": "≤79",
    "safari": "≤13.1",
    "safari_ios": "≤13.4"
  }
}
```
