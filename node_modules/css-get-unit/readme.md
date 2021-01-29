# css-get-unit [![NPM version](https://badge.fury.io/js/css-get-unit.svg)](https://npmjs.org/package/css-get-unit) [![Build Status](https://travis-ci.org/jamen/css-get-unit.svg?branch=master)](https://travis-ci.org/jamen/css-get-unit)

> Get unit from a CSS value

```js
var unit = require('css-get-unit')

unit('1px')
// => 'px'

unit('30.5kHz')
// => 'kHz'

unit('auto')
// => null
```

This module gets unit from the CSS value without verifying.  If there is no unit it will return `null`.  To get the number instead, just use `parseFloat`:

```javascript
var value = '100px'

// User css-get-unit to get unit:
var unit = unit(value)
// => 'px'

// Use parseFloat to get number:
var number = parseFloat(value)
// => 100
```

## Installation

```sh
$ npm install --save css-get-unit
```

## Usage

### `unit(value)`

 - `value` (`String`): CSS value to get the unit from

```javascript
unit('2px')
// => 'px'

unit('.5ms')
// => 'ms'

unit('100')
// => null
```

## License

MIT © [Jamen Marz](https://github.com/jamen)
