var num = require('./module1');

var formattedNum = num(100,1000000).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
console.log(formattedNum);
module.exports = formattedNum;
