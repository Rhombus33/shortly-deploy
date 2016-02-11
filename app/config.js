// var path = require('path');
// var knex = require('knex')({
//   client: 'sqlite3',
//   connection: {
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   }
// });
// var db = require('bookshelf')(knex);

// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('baseUrl', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// module.exports = db;

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

var User = mongoose.model('User', userSchema);
module.exports = User;
var Link = mongoose.model('Link', linkSchema);
module.exports = Link;

// module.exports = userSchema;
// module.exports = linkSchema;
