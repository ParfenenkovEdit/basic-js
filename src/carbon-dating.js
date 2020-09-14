const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!(typeof sampleActivity === 'string')) {
    return false;
  }

  sampleActivity = parseFloat(sampleActivity);

  if (isNaN(sampleActivity) || sampleActivity > MODERN_ACTIVITY || sampleActivity <= 0) {
    return false;
  }

  const rate = Math.log(MODERN_ACTIVITY / sampleActivity);
  return Math.ceil(rate / (0.693 / HALF_LIFE_PERIOD));
  
};