const CustomError = require("../extensions/custom-error");

const chainMaker = {

  result : [],

  getLength() {
    return this.result.join('~~').length;
  },
  addLink(value) {
      value !== undefined ? this.result.push(`( ${value} )`) : this.result.push('( )')

      return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || position === undefined || position > this.result.length || !Number.isInteger(position)) {
      this.result = [];
      throw new Error('THROWN');
    }
      this.result.splice(position - 1, 1);
      return this;
  },
  reverseChain() {
    this.result.reverse();

    return this;
  },
  finishChain() {
    let resultChain = this.result.join('~~');
    this.result = [];
    return resultChain;
  }
};

module.exports = chainMaker;
