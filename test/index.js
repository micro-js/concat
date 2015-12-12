/**
 * Imports
 */

var concat = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(concat([1], [2]), [1, 2])
  t.deepEqual(concat([1], 2), [1, 2])
  t.end()
})
