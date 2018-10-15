const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//'mongodb://localhost:27017/MeanStack'

mongoose.connect('mongodb://akyi0304:akyi9999@ds133353.mlab.com:33353/mean_stack_db', {
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