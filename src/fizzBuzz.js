'use strict';

/*
 * fizzBuzz
 *
 * Takes an input length and returns an array of the specified length
 * where the values are:
 *  1) the index + 1, eg: [ 1, 2 ], array[ 0 ] === 1, array[ 1 ] === 2
 *  2) values that would be multiples of 3 are replaced with 'fizz', eg: [ 1, 2, 'fizz' ]
 *  3) values that would be multiples of 5 are replaced with 'buzz', eg: [ 1, 2, 'fizz', 4, 'buzz' ]
 *  4) values that would be multiples of both 3 and 5 are replaced with 'fizzbuzz', eg: [ 1, 2, 'fizz', ... 14, 'fizzbuzz' ]
 *
 * Eg:
 *
 *   input: 10
 *   returns: [ 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz' ]
 *
 */
module.exports = ( length ) => {
  var fizzer = [];

  for (var i = 1; i <= length; i++ ) {
    var fizzValue = i;

    if (i % 3 === 0 && i % 5 === 0) {
      fizzValue = "fizzbuzz"
    } else if (i % 3 === 0) {
      fizzValue = "fizz"
    } else if (i % 5 === 0) {
      fizzValue = "buzz"
    }

    fizzer.push(fizzValue);
  }

  return fizzer;

};
