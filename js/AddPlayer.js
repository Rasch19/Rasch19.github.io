
	$("#Add").click(function() {
		
		var element = document.getElementById("p1");
		var button = document.getElementById("Add");
		
		if(button.innerHTML == "Ready")
		{
			if(parseInt(element.innerHTML) < 5)
			{
				element.innerHTML = (parseInt(element.innerHTML) + 1);
			}
		}
		else {
			alert("an Error occured!");
		}
		
		
	});

