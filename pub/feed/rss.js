$(document).ready(function() {
	//feed to parse
	var feed = "/feed/rss";

	$.ajax(feed, {
		accepts: {
			xml: "application/rss+xml"
		},
		dataType: "xml",
		success: function(data) {
			//Credit: http://stackoverflow.com/questions/10943544/how-to-parse-an-rss-feed-using-javascript

			$(data).find("item").each(function() {
				var el = $(this);

				$(".feed").append('<li><h2>' + el.find("title").text() + '</h2><p>' + el.find("description").text().slice(0, -6) + '</p></li>');
			});


		}
	});

});