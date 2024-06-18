#!/usr/bin/node
const { argv } = require('node:process');

const factorial = (n) => {
  if (isNaN(n) || n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log(factorial(Number(argv[2])));
