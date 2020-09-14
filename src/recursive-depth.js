const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    let max_depth = 1;
    for (let k in arr) {
      if (Array.isArray(arr[k])) {
        depth += (this.calculateDepth(arr[k]));
      }
      if (max_depth < depth) {
        max_depth = depth;
      }
      depth = 1;
    }
    return max_depth;
  };
};