module.exports = {
	makeResponse: (res, success, message) => {
		return res.json({
			success,
			message 
		});
	},
	makeArrayResponse: (res, success, message, array) => {
		return res.json({
			success,
			message,
			'response': array
		});
	}	
}