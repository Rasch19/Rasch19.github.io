
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
			if(parseInt(element.innerHTML) < 5)
			{
				element.innerHTML = (parseInt(element.innerHTML) + 1);
			}
			
			button.innerHTML = "Unready";
			button.style.borderColor = #ff3300;
			button.style.color = #ff3300;
			
		}
		else if(button.innerHTML == "Unready")
		{
			if(parseInt(element.innerHTML) < 5)
			{
				element.innerHTML = (parseInt(element.innerHTML) + 1);
			}
			
			button.innerHTML = "Ready";
			button.style.borderColor = #92bb35;
			button.style.color = #92bb35;
		}
		else{
			alert("an Error occured!");
		}
		
		
	});

