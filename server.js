var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200, { 'Content-Type': 'application/json' });
  var payload = fs.readFileSync('./data_set.json', 'utf8');
  res.end(payload);
}).listen(1337);

console.log('Server started...');
