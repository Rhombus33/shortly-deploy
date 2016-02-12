var mongoose = require('mongoose');
var linkSchema = require('../schema/links.js');

var Link = mongoose.model('Link', linkSchema);
module.exports = Link;
