const express = require('express');
const {mongoose} = require('../../db/mongoose');

var router = express.Router();

var {User} = require('../models/user');

var jwt = require('jsonwebtoken');

var helper = require('../../helpers/helper');

router.post('/', (req, res) => {
	var user = new User({
		username: req.body.username,
		password: req.body.password,
		email: req.body.email
	});

	if (req.body.username && req.body.password && req.body.email) {
		user.save().then((doc) => {
			helper.makeResponse(res, true, 'Saved Successfully');
		}).catch((e) => {
			helper.makeResponse(res, false, e);
		});	
	} else {
		helper.makeResponse(res, false, 'All fields are mandatory');
	}
});

// login route
router.post('/login', (req, res) => {

	if (req.body.username && req.body.password) {
		User.findByCredentials(req.body.username, req.body.password).then((doc) => {
			/*jwt.sign({
				username: doc.username,
				email: doc.email
			}, 
			secret: {

			});*/
			helper.makeArrayResponse(res, 1, 'Login success', doc);
		}).catch((e) => {
			helper.makeArrayResponse(res, 0, 'Invalid username/password.', e);
		})
	} else {
		helper.makeResponse(res, 0, 'Please provide username or password.');
	}
	
});

module.exports = router;