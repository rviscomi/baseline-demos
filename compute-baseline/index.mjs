import { getStatus } from 'compute-baseline';

console.log(JSON.stringify(
  getStatus('table', 'css.properties.border-collapse.collapse'),
  null, 2
));
