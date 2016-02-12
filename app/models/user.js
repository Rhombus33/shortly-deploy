var mongoose = require('mongoose');
var userSchema = require('../schema/users.js');

var User = mongoose.model('User', userSchema);
module.exports = User;