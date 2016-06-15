'use strict';

/*
 * balancedParentheses
 *
 * Takes an input string and returns true or false depending on if the string
 * has balanced parentheses.
 *
 * Eg:
 *
 *   input: '(x + y)'
 *   returns: true
 *
 *   input: '(x + y'
 *   returns: false
 *
 *   input: 'foo bar baz'
 *   returns: false
 *
 *   input: ''
 *   returns: false
 */
module.exports = ( input ) => {
  var pairStack = [] ;
  var currentChar;

  // we never open a pair in the string
  if (input.indexOf("(") === -1) {
    return false;
  }

  // ok, so there is at least one opening paren, check the balance
  for (var i = 0; i < input.length; i++) {
    currentChar = input[i];

    // if the qualifier we encouter is an opening paren, push it
    if (currentChar === "(") {
      pairStack.push(currentChar);
    }


    // if the qualifier is a closer, test to see if it is out of order
    if (currentChar === ")" )  {
      if (pairStack.length === 0) {
        return false;
      }

      // if there is at least one opener on there, pop it
      pairStack.pop()
    }
  }

  return pairStack.length === 0;
};
