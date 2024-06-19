#!/usr/bin/node
module.exports = class Rectangle {
  constructor (w, h) {
    if (w && h && Math.sign(w) === 1 && Math.sign(h) === 1) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let x = 0; x < this.height; x++) {
      console.log('X'.repeat(this.width));
    }
  }

  double () {
    this.width = this.width * 2;
    this.height = this.height * 2;
  }

  rotate () {
    this.width = this.height;
    this.height = this.width;
  }
};
