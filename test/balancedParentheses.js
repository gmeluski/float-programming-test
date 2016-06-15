'use strict';

const fpt = require( '../index.js' );
const test = require( 'tape' );

test( 'BALANCED PARENTHESES: exports balancedParentheses method', t => {
    t.ok( fpt.balancedParentheses, 'has balancedParentheses export' );
    t.equal( typeof fpt.balancedParentheses, 'function', 'balancedParentheses is a function' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns true for balanced string', t => {
    const input = '(x + y)';
    const result = fpt.balancedParentheses( input );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, true, 'result is correct' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns false for unbalanced string', t => {
    const input = '(x + y';
    const result = fpt.balancedParentheses( input );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, false, 'result is correct' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns false for no parens', t => {
    const input = 'foo bar baz';
    const result = fpt.balancedParentheses( input );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, false, 'result is correct' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns false for no length', t => {
    const input = '';
    const result = fpt.balancedParentheses( input );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, false, 'result is correct' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns false for an inverted pair', t => {
    const input = ')x + y(';;
    const result = fpt.balancedParentheses( input );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, false, 'result is correct' );
    t.end();
} );

test( 'BALANCED PARENTHESES: lets get wild', t => {
    const input = '(x + y((hello)))(';
    const result = fpt.balancedParentheses( input );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, false, 'result is correct' );
    t.end();
} );
