var mongoose = require('mongoose');
var crypto = require('crypto');

var linkSchema = new mongoose.Schema({
  url: {
    type: String,
    unique: true
  },
  baseUrl: String,
  code: String,
  title: String,
  visits: Number, 
  created_at: {
    type: Date
  }
});

userSchema.pre('save', function(next) {
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0, 5);
  next();
});

module.exports = linkSchema;