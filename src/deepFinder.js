'use strict';

/*
 * deepFinder
 *
 * Takes an input and a test function and returns any values
 * in the input *recursively* that pass the test.
 *
 * Eg:
 *
 *   input: [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], { foo: 'aardvark' }, 'allegory' ]
 *   test: value => /^a/i.test( value )
 *   returns: [ 'ant', 'apple', 'aardvark', 'allegory' ]
 *
 */
module.exports = ( input, test ) => {
  var finalAnswer = []

  function testMe(testObject) {
    var testValue;

    if (typeof testObject === 'string' || testObject instanceof String) {
      return test(testObject)
    }

    for (var key in testObject) {
      if (testMe(testObject[key])) {
        finalAnswer.push(testObject[key])
      }
    }


  }

  testMe(input)
  return finalAnswer;

};
