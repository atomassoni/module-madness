var http = require('http');
var message = require('./modules/module3');


http.createServer(function(req, res) {
  res.writeHead(200);
  res.write(message.acctText() + message.numString() + "\n");
  res.end();
}).listen(3000);

console.log('listening on port 3000');
