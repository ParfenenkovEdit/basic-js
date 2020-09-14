const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  let resultArr = arr.slice();

  for (let i = 0; i <= resultArr.length - 1; i += 1) {
    switch(resultArr[i]) {
      case '--discard-prev': {
        if (i != 0 || resultArr[i - 1] !== undefined) {
          resultArr[i - 1] = undefined;
          resultArr.splice(i, 1);
        } else {
          resultArr.splice(i, 1);
        }
        break;
      }
      case '--double-prev': {
        if (resultArr[i - 1] !== undefined) {
          resultArr.splice(i, 0, resultArr[i - 1]);
          i += 1
          resultArr.splice(i, 1);
        } else {
          resultArr.splice(i, 1);
        }
        break;
      }
      case '--discard-next': {
        if (!(i + 1 >= resultArr.length)) {
          resultArr[i + 1] = undefined;
          resultArr.splice(i, 1);
        } else {
          resultArr.splice(i, 1);
        }
        break;
      }
      case '--double-next': {
        if (resultArr[i + 1] !== undefined) {
          resultArr.splice(i + 1, 0, resultArr[i + 1]);
          resultArr.splice(i, 1);
        } else {
          resultArr.splice(i, 1);
        }
        break;
      }
      default: {
        break;
      }
    }
  }
  return resultArr.filter((x) => x !== undefined);
};
