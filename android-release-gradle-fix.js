/* eslint-disable no-console */
/* eslint-disable no-throw-literal */
/* eslint-disable prefer-const */
const fs = require('fs');

try {
  // eslint-disable-next-line prefer-const
  let curDir = __dirname;
  let rootDir = process.cwd();

  let file = `${rootDir}/node_modules/react-native/react.gradle`;
  let dataFix = fs.readFileSync(`${curDir}/android-react-gradle-fix`, 'utf8');
  let data = fs.readFileSync(file, 'utf8');

  let doLast = 'doLast {';
  if (data.indexOf(doLast) !== -1) {
    throw 'Already fixed.';
  }

  let result = data.replace(
    /\/\/ Set up inputs and outputs so gradle can cache the result/g,
    dataFix
  );
  fs.writeFileSync(file, result, 'utf8');
  console.log('Done');
} catch (error) {
  console.error(error);
}
