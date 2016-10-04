function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
	}
	
	var first = getUrlVars()["url"];
	var element = document.getElementById("p1");
	var urlnumber = 0;
	
	$.ajax({
		url: 'urls.json',
		dataType: 'json',
		type: 'get',
		cache: false,
		success: function(data) {
			console.log('it worked');
			for(i = 0; i<data.length; i++)
			{
				if(data[i].url == first)
				{
					element.innerHTML = data[i].counter;
					urlnumber = i;
					break;
				}
				else if(i == (data.length - 1))
				{
					console.log("couldn't find it")
				}
			}
			console.log(urlnumber);
			var check = setInterval(function() {
				$.ajax({
					url: 'urls.json',
					dataType: 'json',
					typ: 'get',
					cache: false,
					success: function(data) {
						var ids = ["play1", "play2", "play3", "play4", "play5"];
						pn = data[urlnumber].counter;
						element.innerHTML = pn;
						if(pn == 5)
						{
							clearInterval(check);
						}
					}
				});
			}, 1000);
			
		}
	});