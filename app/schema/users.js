var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: {
    type: String, 
    unique: true
  },
  password: String, 
  created_at: {
    type: Date
  }
});


module.exports = userSchema;