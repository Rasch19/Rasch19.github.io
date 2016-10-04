$('#copy').click(function(){
	console.log("niggah");
    $('#copy').innerHTML = "Copied!";
	document.getElementById("#copy").style.color = "#ff3300";
	document.getElementById("#copy").style.borderColor = "#ff3300";
	var check = setTimeout(function() {
		console.log("got into setTimeout");
		document.getElementById("#copy").innerHTML = "Copy URL";
		document.getElementById("#copy").style.color = "#92bb35";
		document.getElementById("#copy").style.borderColor = "#92bb35";
		console.log("put the color back");
	}, 1000);
	console.log("done with function");
	
    return false;
});