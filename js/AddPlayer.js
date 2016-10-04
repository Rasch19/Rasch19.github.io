
	$("#Add").click(function() {
		
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
			
		}
		else if(button.innerHTML == "Unready")
		{
			if(parseInt(element.innerHTML) < 5)
			{
				element.innerHTML = (parseInt(element.innerHTML) + 1);
			}
			
			button.innerHTML = "Ready";
			
		}
		else{
			alert("an Error occured!");
		}
		
		
	});

