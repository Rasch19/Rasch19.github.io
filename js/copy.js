$("#copy").click(function() {
	clipboard.copy(location.href);
	
	var button = document.getElementById("copy");
	
	console.log("niggah");
    button.innerHTML = "Copied!";
	button.style.color = "#ff3300";
	button.style.borderColor = "#ff3300";
    return false;
});

$('#copy').mouseup(function () {
    var check = setTimeout(function() {
		console.log("got into setTimeout");
		
		var button = document.getElementById("copy");
		
		button.innerHTML = "Copy URL";
		button.style.color = "#92bb35";
		button.style.borderColor = "#92bb35";
		console.log("put the color back");
	}, 100);
	console.log("done with function");
    return false;
});
$('#copy').mouseout(function () {
    var check = setTimeout(function() {
		console.log("got into setTimeout");
		
		var button = document.getElementById("copy");
		
		button.innerHTML = "Copy URL";
		button.style.color = "#92bb35";
		button.style.borderColor = "#92bb35";
		console.log("put the color back");
	}, 100);
	console.log("done with function");
    return false;
});