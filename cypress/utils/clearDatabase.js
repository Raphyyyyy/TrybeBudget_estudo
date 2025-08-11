const util = require('util');
const exec = util.promisify(require('child_process').exec);


const clearDatabase = async () => {
  await exec("rm server/db.json");
  await exec("cp server/db-clear.json server/db.json");
  return 0;
}

module.exports = {
  clearDatabase
}