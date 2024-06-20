#!/usr/bin/node
const Square5 = require('./5-square');
module.exports = class Square extends Square5 {
  constructor (size) {
    super(size, size);
  }

  charPrint (c) {
    let char;
    if (c) {
      char = c;
    } else {
      char = 'X';
    }
    for (let x = 0; x < this.height; x++) {
      console.log(char.repeat(this.width));
    }
  }
};
