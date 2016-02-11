var app = require('./server-config.js');

var port = 3000;
var mongoose = require('mongoose');

var dbPort = 'mongodb://localhost/27017';
mongoose.connect(dbPort);

app.listen(port);

console.log('Server now listening on port ' + port);
