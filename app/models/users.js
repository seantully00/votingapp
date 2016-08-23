'use strict';

require('dotenv').load();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var conn = mongoose.connect(process.env.MONGO_URI);

var Userschema = new Schema({
	twitter: {
	'user_id': { type: String, lowercase: true, unique: true },
	'screen_name': { type: String, lowercase: true, unique: true }
	},
   polls: {
   }
});

var userentry = conn.model('users', Userschema);

module.exports = mongoose.model('Users', Userschema);
