const { execSync, exec } = require("child_process");

const grren = (str) => `[32m${str}[39m`;

const execStr = (str) => {
  try {
    return execSync(str).toString().trim();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const checkGit = execStr("git diff --cached");

/**
 * @description 错误
 * @param {*} arrError 数组
 */
const logError = (arrError) => {
  console.log(
    "🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨"
  );
  console.log(`🚨 `);
  arrError.forEach((err) => console.log(`🚨 ` + err));
  console.log(`🚨 `);
  console.log(
    "🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨"
  );
};

/**
 * @description 成功
 * @param {*} arrError 数组
 */
const logSuccess = (arrSucc = []) => {
  console.log(
    "🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉"
  );
  console.log(`🎉 `);
  arrSucc.forEach((succ) => console.log(`🎉 ` + succ));
  console.log(`🎉 `);
  console.log(
    "🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉"
  );
};

module.exports = {
  execStr,
  logError,
  logSuccess,
  checkGit,
  grren,
};
