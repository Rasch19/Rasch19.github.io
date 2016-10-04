var timeout, clicker = $('#copy');
var element = document.getElementById["#copy"]

clicker.mousedown(function(){
    element.innerHTML = "Copied!";
	element.style.color = "#ff3300";
	element.style.borderColor = "#ff3300";
	
    return false;
});

$(document).mouseup(function(){
    setTimeout(myFunction() {
		element.innerHTML = "Copy URL";
		element.style.color = "";
		element.style.borderColor = "#92bb35";	
	}, 3000)
    return false;
});