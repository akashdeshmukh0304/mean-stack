const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//'mongodb://localhost:27017/MeanStack'

mongoose.connect(process.env.MONGODB_URI, {
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