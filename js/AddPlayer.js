
	$("#Add").mousedown(function() {
		var button = document.getElementById("Add");
		button.style.color = "##ff9900";
		button.style.borderColor = "#ff9900";
	});



	$("#Add").mouseup(function() {
		
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
			button.style.color = "#ff3300";
			button.style.borderColor = "#ff3300";
			
		}
		else if(button.innerHTML == "Unready")
		{
			if(parseInt(element.innerHTML) < 5)
			{
				element.innerHTML = (parseInt(element.innerHTML) + 1);
			}
			
			button.innerHTML = "Ready";
			button.style.color = "#92bb35";
			button.style.borderColor = "#92bb35";
		}
		else{
			alert("an Error occured!");
		}
		
		
	});

