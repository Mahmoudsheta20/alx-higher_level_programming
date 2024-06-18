#!/usr/bin/node
const { argv } = require('node:process');
if (argv[2]) {
  if (Math.sign(Number(argv[2])) === 1) {
    for (let x = 0; x < Number(argv[2]); x++) {
      console.log('C is fun');
    }
  }
} else {
  console.log('Missing number of occurrences');
}
