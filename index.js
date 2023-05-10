const os = require('os');
const path = require('path');

const math = require('./math')

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

console.log(math.sum(3,5));
console.log(math.divide(4,5));

console.log(path.parse(__filename).ext);