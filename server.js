require('./config/config');

const express = require('express');
var app = express();
var port = process.env.PORT || 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');
var path = require('path');
const {mongoose} = require('./db/mongoose');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.disable('x-powered-by');

var user = require('./app/routes/user');

app.use('/user', user);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

app.listen(port, () => {
	console.log(`Server up on port ${port}`);
});