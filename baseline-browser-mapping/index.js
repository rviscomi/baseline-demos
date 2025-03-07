import { getMinimumByYear } from "baseline-browser-mapping";

console.log(getMinimumByYear('2020', true).map(({browser, version}) => `${browser} ${version}`).join("\n"));
