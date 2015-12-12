
# concat

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Functional version of Array.prototype.concat

## Installation

    $ npm install @micro-js/concat

## Usage

```js
var concat = require('@micro-js/concat')

concat([1], [2] // -> [1, 2]
concat([1], 2)  // -> [1, 2]
```

## API

### concat(a, b)

- `a` - Array
- `b` - Array or scalar value to concat onto `a`

**Returns:** A new array with `b`tacked onto the end of `a`.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/concat.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/concat
[git-image]: https://img.shields.io/github/tag/micro-js/concat.svg
[git-url]: https://github.com/micro-js/concat
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@micro-js/concat.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@micro-js/concat
