var SMARTBOARD_URLS = [
	'https://banggia-hn.vndirect.com.vn',
	'https://banggia-hcm.vndirect.com.vn',
	'https://banggia-na.vndirect.com.vn',
	'https://banggia-eu.vndirect.com.vn',
	'https://banggia-as.vndirect.com.vn'
];

function shuffle(a) {
    for (var i = a.length; i; i--) {
        var j = Math.floor(Math.random() * i);
        var tmp = a[i - 1];
        a[i - 1] = a[j];
        a[j] = tmp;
    }
}

var validDomains = [];

function makeRequest(url, cb) {
	var request = new XMLHttpRequest();
	request.addEventListener("load", function() {
		validDomains.push(url);
		cb();
	});
	request.addEventListener("error", function() {
		cb();
	});
	request.open("GET", url);
	request.send();
}

function checkValidDomains(cb) {
	makeRequest(SMARTBOARD_URLS[0], function() {
		makeRequest(SMARTBOARD_URLS[1], function() {
			makeRequest(SMARTBOARD_URLS[2], function() {
				makeRequest(SMARTBOARD_URLS[3], function() {
					makeRequest(SMARTBOARD_URLS[4], function() {
						cb(validDomains);
					});
				});
			});
		});
	});
}

function checkNearestAndRedirect(domains) {
	shuffle(domains);
	for (var i in domains) {
		ping(domains[i]).then(function(data) {
			window.location.assign(data.url);
		});	
	}
}

checkValidDomains(function(validDomains) {
	checkNearestAndRedirect(validDomains);
});




