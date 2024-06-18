#!/usr/bin/node
const { argv } = require('node:process');
if (argv.length <= 3) {
  console.log(0);
}
const args = argv.slice(2);
const numbers = args.map(arg => Number(arg));
const sortsNumbers = numbers.sort((a, b) => b - a);
console.log(sortsNumbers[1]);
