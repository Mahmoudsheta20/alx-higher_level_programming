#!/usr/bin/node
const { argv } = require('node:process');

if (argv[2]) {
  argv.forEach((val, index) => {
    if (index > 1) {
	  console.log(val);
    }
  });
} 
else {
  console.log('No argument');
}
