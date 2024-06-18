#!/usr/bin/node
const { argv } = require('node:process');
const x = Number(argv[2]);
if (x) {
  if (Math.sign(x)) {
    for (let l = 0; l < x; l++) {
      console.log('X'.repeat(x));
    }
  }
} else {
  console.log('Missing size');
}
