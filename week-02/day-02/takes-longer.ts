'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

console.log(quote);

let missing: string = ' always takes longer than ';

let whole: string = quote.slice(0,20) + missing + quote.slice(21);

console.log(whole);