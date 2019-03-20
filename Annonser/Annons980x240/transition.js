
var first = document.getElementById("first");
var second = document.getElementById("second");
var count = 0;
var myvar = 0;

setTimeout(startTrans, 5000);

function startTrans() {
	second.style.visibility = "visible";
	first.classList.toggle("transparent");
	second.classList.toggle("transparent");
	count++;
	myvar = setInterval(contTrans, 5000);
}

function contTrans() {
	first.classList.toggle("transparent");
	second.classList.toggle("transparent");
	count++;
	if(count > 2) {
		clearInterval(myvar);
	}
}