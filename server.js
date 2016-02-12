var app = require('./server-config.js');
var mongoose = require('mongoose');

var port = 3000;
app.listen(port);
console.log('Server now listening on port ' + port);

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to MongoDB');
});
