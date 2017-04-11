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

shuffle(SMARTBOARD_URLS);

for (var i in SMARTBOARD_URLS) {
	ping(SMARTBOARD_URLS[i]).then(function(data) {
		window.location.replace(data.url);
	});	
}

