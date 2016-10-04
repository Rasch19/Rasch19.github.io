$('#copy').click(function(){
	console.log("niggah");
    $('#copy').innerHTML = "Copied!";
	$('#copy').style.color = "#ff3300";
	$('#copy').style.borderColor = "#ff3300";
	var check = setTimeout(function() {
		console.log("got into setTimeout");
		$('#copy').innerHTML = "Copy URL";
		$('#copy').style.color = "#92bb35";
		$('#copy').style.borderColor = "#92bb35";
		console.log("put the color back");
	}, 1000);
	console.log("done with function");
	
    return false;
});