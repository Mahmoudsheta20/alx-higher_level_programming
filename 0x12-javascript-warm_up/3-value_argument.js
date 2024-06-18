#!/usr/bin/node
const { argv } = require('node:process');

// print process.argv
if (argv[2]) {
  argv.forEach((val, index) => {
    console.log(val);
  });
} else {
  console.log('No argument');
}
