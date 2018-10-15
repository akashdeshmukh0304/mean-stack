const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/MeanStack', {
	useNewUrlParser: true
}, (err) => {
	if (err) {
		console.log('Server Not connected');
	} else {
		console.log('Connected successfully.');
	}
});

mongoose.set('useCreateIndex', true);

module.exports = {mongoose};