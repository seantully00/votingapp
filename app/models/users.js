'use strict';

require('dotenv').load();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var conn = mongoose.connect(process.env.MONGO_URI);

var Userschema = new Schema({
	twitter: {
	'twitter.id ': { type: String},
	'twitter.token': { type: String},
	'twitter.username': { type: String},
	'twitter.displayName': { type: String}
	},
   polls: {
   }
});

var userentry = conn.model('users', Userschema);

module.exports = mongoose.model('Users', Userschema);
