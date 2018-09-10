var path = require('path');
var express = require('express');
var app = express();

var htmlPath = path.join(__dirname, 'pub');

app.use(express.static(htmlPath));

function handle_rss(req, res) {
	const https = require('https');

	https.get("https://thisisteamwalle.weebly.com/1/feed", (resp) => {
		let data = '';

		// A chunk of data has been recieved.
		resp.on('data', (chunk) => {
			data += chunk;
		});

		// The whole response has been received. Print out the result.
		resp.on('end', () => {
			res.send(data)
		});

	}).on("error", (err) => {
		console.log("Error: " + err.message);
	});
}


app.get('/feed/rss', (req, res) => handle_rss(req, res))

var server = app.listen(3000, function() {
	var host = 'localhost';
	var port = server.address().port;
	console.log('listening on http://' + host + ':' + port + '/');
});