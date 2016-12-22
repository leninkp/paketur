var express = require('express');
var http = require('http');
var path = require('path');
var port = process.env.PORT || 5000;

var app = express();
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(req, res){
  res.sendfile('index.html');
});

var server = http.createServer(app);
server.listen(port, function(){console.log('running on:' + port)});
