## co-limits

co-limits extends [limits.js](https://github.com/xat/limits.js) with a 'co' method. With this you can
use limits.js in an [co container](https://github.com/visionmedia/co).

### Sample

```javascript

var co = require('co');
var colimits = require('co-limits');
var start = Date.now();

var c = colimits({
    secondly: 1, // allow 1 call per second
    minutely: 2  // allow 2 calls per minute
}).co();

co(function* () {
    yield c;
    console.log(Date.now() - start, 'ms'); // Output: 0 ms
    yield c;
    console.log(Date.now() - start, 'ms'); // Output: 1000 ms
    yield c;
    console.log(Date.now() - start, 'ms'); // Output: 60000 ms
})();

```

### Installation

```
npm install co-limits
```

## License
Copyright (c) 2014 Simon Kusterer
Licensed under the MIT license.