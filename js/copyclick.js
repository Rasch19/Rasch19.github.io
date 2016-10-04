var elem = document.getElementById["#copy"];

$('#copy').click(function(){
	alert("you clicked boss");
	var elem = document.getElementById["#copy"];
    elem.innerHTML = "Copied!";
	elem.style.color = "#ff3300";
	elem.style.borderColor = "#ff3300";
	var check = setTimeout(function() {
		var elem = document.getElementById["#copy"];
		elem.innerHTML = "Copy URL";
		elem.style.color = "#92bb35";
		elem.style.borderColor = "#92bb35";
		alert("changed the colors back");
	}, 1000);
	
    return false;
});