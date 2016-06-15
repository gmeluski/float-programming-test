'use strict';

/*
 * finder
 *
 * Takes an input and a test function and returns any values in
 * the input that pass the test.
 *
 * Eg:
 *
 *   input: [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], { foo: 'aardvark' }, 'allegory' ]
 *   test: value => /^a/i.test( value )
 *   returns: [ 'ant', 'allegory' ]
 *
 */
module.exports = ( input, test ) => {
  var foundWords = [];

  for (var i = 0; i < input.length; i++) {
    var testObject = input[i];

    if ((typeof testObject === 'string' || testObject instanceof String) &&
      test(testObject)) {
      foundWords.push(testObject);
    }

  }

  return foundWords;
};
