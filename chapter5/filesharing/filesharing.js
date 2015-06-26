// Required libraries
var express = require('express');
var app = express();

// Main route
app.get('/', function (req, res) {
  res.send('Welcome to your fileserver!');
});

// Download route
app.get('/download', function(req, res){
  var file = __dirname + '/upload-folder/dramaticpenguin.MOV';
  res.download(file);
});

// Start server
var server = app.listen(3000, function () {
  console.log('Filesharing server started.');
});