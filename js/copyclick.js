$('#copy').click(function(){
	console.log("registered click");
	var elem = document.getElementById("#copy");
    elem.innerHTML = "Copied!";
	elem.style.color = "#ff3300";
	elem.style.borderColor = "#ff3300";
	var check = setTimeout(function() {
		console.log("got into setTimeout");
		var elem = document.getElementById("#copy");
		elem.innerHTML = "Copy URL";
		elem.style.color = "#92bb35";
		elem.style.borderColor = "#92bb35";
		console.log("put the color back");
	}, 1000);
	console.log("done with function");
	
    return false;
});