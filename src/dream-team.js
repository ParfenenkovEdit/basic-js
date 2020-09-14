const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if (!(Array.isArray(members))) {
    return false;
  }
  
  let result = [];

  for (let i = 0; i <= members.length - 1; i += 1) {
    if (typeof members[i] !== 'string') {
      continue;
    }
    else {
      const member = members[i].trim();
      result.push(member[0].toUpperCase());
    }
  }
  return result === [] ? false : result.sort().join('');
};
