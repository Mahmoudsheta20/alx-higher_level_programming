#!/usr/bin/node
const { argv } = require('node:process');
function add (a, b) {
  if (!a || !b) {
    return NaN;
  } else {
    return a + b;
  }
}
console.log(add(Number(argv[2]), Number(argv[3])));
