const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  options.separator = options.separator ? options.separator : '+';
  options.additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  options.repeatTimes = typeof options.repeatTimes === 'undefined' ? 1 : options.repeatTimes;
  str = str === null? 'null' : `${str}`;
  

  let result = [];

  for (let i = 0; i < options.repeatTimes; i += 1) {
    let arr = [];
    if (options.additionRepeatTimes || options.additionRepeatTimes === undefined) {
      options.additionRepeatTimes = typeof options.additionRepeatTimes === 'undefined' ? 1 : options.additionRepeatTimes;
      options.addition = options.addition === null ?  'null' : options.addition;
      for (let j = 0; j < options.additionRepeatTimes; j += 1) {
        arr.push(options.addition);
      }
    }
    result.push(`${str}${arr.join(options.additionSeparator)}`);
  }

  return result.join(options.separator);
};
  