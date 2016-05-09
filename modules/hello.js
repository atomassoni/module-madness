var mu = require('./mu');

var messages = {
  helloMessage : function() {
    return 'my message, ' + ' ' + mu();
  },
  byeMessage : function() {
    return 'See you later!';
  }
};

module.exports = messages;
