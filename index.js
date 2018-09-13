var path = require('path');
var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended: true
}));

var posts = [{
	"date": "10/09",
	"title": "",
	"desc": ""
}]

var htmlPath = path.join(__dirname, 'pub');

app.use(express.static(htmlPath));

function add_post(req, res) {
	console.log(req.body.title);
}


app.post('/feed/add', (req, res) => add_post(req, res))

var server = app.listen(80, function() {
	var host = 'localhost';
	var port = server.address().port;
	console.log('listening on http://' + host + ':' + port + '/');
});