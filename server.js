console.log('whatup, fam?')

var express = require('express');
var app = express();

var myModule = require('./module')

// respond with "Hello World!" on the homepage
app.get('/', function (req, res) {
  res.send(myModule.randomQuote());
});

app.get('/api/lyrics', function (req, res) {
  res.send(myModule.quotes);
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});

 