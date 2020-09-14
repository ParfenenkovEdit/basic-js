const CustomError = require("../extensions/custom-error");
class VigenereCipheringMachine {
  constructor(flag) {
    this.flag = flag === undefined ? true : flag;
  }

  alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  square = [];

  generateSquare() {
    for (let i = 0; i < this.alphabet.length; i++) {
      let row = this.alphabet.slice(i);
      if (i !== 0) {
        row = row + ','
      }
      row += this.alphabet.slice(0, i);
      this.square.push(row);
    }
  }

  repeatKeyString(key, message) {
    return key.repeat(Math.ceil(message.length / key.length));
  }

  generateKey(key, string) {
    let subkey = key.slice().split('');
    for (let i = 0; i <= string.length - 1; i += 1) {
      if (string[i] === ' ') {
        subkey.splice(i, 0, ' ');
      }
    }
    return subkey.join('');
  }

  encrypt(string, key) {
    if (!(typeof string === 'string' && typeof key === 'string')) {
      throw new Error;
    }

    this.generateSquare();

    let newKey = this.generateKey(this.repeatKeyString(key, string).toLowerCase(), string);

    let encryptMessage = '';

    string = string.toLowerCase();

    for (let i = 0; i <= string.length - 1; i += 1) {
      if (/[^a-z]/.test(string[i])) {
        encryptMessage += string[i];
      } else {
        let splitRow = this.square[this.alphabet.indexOf(string[i])].split(',');
        encryptMessage += splitRow[this.alphabet.indexOf(newKey[i])];
      }

    }
    return this.flag === true ? encryptMessage.toUpperCase() : encryptMessage.split('').reverse().join('').toUpperCase();
  }
  decrypt(string, key) {
    if (!(typeof string === 'string' && typeof key === 'string')) {
      throw new Error;
    }

    this.generateSquare();

    let newKey = this.generateKey(this.repeatKeyString(key, string).toLowerCase(), string);

    let decryptMessage = '';

    string = string.toLowerCase();

    for (let i = 0; i <= string.length - 1; i += 1) {
      if (/[^a-z]/.test(string[i])) {
        decryptMessage += string[i];
      } else {
        let k = this.alphabet.indexOf(newKey[i]);
        let j = this.square[k].split(',').indexOf(string[i]);
        decryptMessage += this.alphabet[j];
      }

    }

    return this.flag === true ? decryptMessage.toUpperCase() : decryptMessage.split('').reverse().join('').toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;