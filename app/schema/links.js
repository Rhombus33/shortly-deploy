var mongoose = require('mongoose');

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

module.exports = linkSchema;