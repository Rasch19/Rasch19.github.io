var clicker = $('#copy');
var element = document.getElementById["#copy"]

$('#copy').mousedown(function(){
	alert("registered click!");
    element.innerHTML = "Copied!";
	element.style.color = "#ff3300";
	element.style.borderColor = "#ff3300";
	
    return false;
});

$(document).mouseup(function(){
    setTimeout(function() {
		element.innerHTML = "Copy URL";
		element.style.color = "#92bb35";
		element.style.borderColor = "#92bb35";
		alert("changed the colors back");
	}, 1000);
    return false;
});