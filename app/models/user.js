const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;
const validator = require('validator');

var UserSchema = new Schema({
	username: {
		type: String,
		required: true,
		lowercase: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
		validate: {
			validator: validator.isEmail,
			message: '{VALUE} is not a valid email'
		}
	}
});

UserSchema.pre('save', function(next) {
	var user = this;
	if (user.isModified('password')) {
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(user.password, salt, (err, hash) => {
				user.password = hash;
				next();	
			});			
		});		
	} else {
		next();
	}
});

// static method to get the user details
UserSchema.statics.findByCredentials = function (username, password) {

	var User = this;

	return User.findOne({username})
	.select('_id username password email')
	.then((user) => {
		if (!user) {
			return Promise.reject();
		}
		return new Promise((resolve, reject) => {
			bcrypt.compare(password, user.password).then((res) => {
				if (res) {
					resolve(user);
				} else {
					reject('Username/Password does not match.');
				}
			});
		});
	});	
}

var User = mongoose.model('User', UserSchema);
module.exports = {User};