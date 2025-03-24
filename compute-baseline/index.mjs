import { computeBaseline, getStatus } from 'compute-baseline';

const bcdKey = 'css.properties.font-stretch';

const status = computeBaseline({compatKeys: [bcdKey]});

console.log(
  status.toJSON()
);

console.log(getStatus('', bcdKey))
