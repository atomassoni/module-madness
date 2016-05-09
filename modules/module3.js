var num = require('./module1');
var formattedNum = require('./module2');

var message = {

  numString : function () {
    return formattedNum;
  },

  acctText : function () {
    return 'Account balance:\n'
  }

}

module.exports = message;
