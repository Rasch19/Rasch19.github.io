
	$("#Add").click(function() {
		function getUrlVars() {
		var vars = {};
		var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
			vars[key] = value;
		});
		return vars;
		}
		
		var first = getUrlVars()["url"];
		var element = document.getElementById("p1");
		var button = document.getElementById("Add");
		
		if(button.innerHTML == "Ready")
		{
			$("#Fucked").hide();
			if(parseInt(element.innerHTML) < 5)
			{
				element.innerHTML = (parseInt(element.innerHTML) + 1);
			}
			
			button.innerHTML = "Unready";
			
			$.ajax({
				url: 'AddPlayer.php',
				data: 'url='+first,
				success: function() {
					console.log('send info');
				}
			});
		}
		else if(button.innerHTML == "Unready")
		{
			if(parseInt(element.innerHTML) > 0)
			{
				element.innerHTML = (parseInt(element.innerHTML) - 1);
			}
			
			button.innerHTML = "Ready";
			
			$.ajax({
				url: 'RemovePlayer.php',
				data: 'url='+first,
				success: function() {
					console.log('send info');
				}
			});
		}
		else{
			alert("an Error occured!");
		}
		
		
	});
	
//	$("#Remove").click(function() {
//		function getUrlVars() {
//		var vars = {};
//		var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
//			vars[key] = value;
//		});
//		return vars;
//		}
//		
//		var first = getUrlVars()["url"];
//		
//		var element = document.getElementById("p1");
//		
//		
//	});

