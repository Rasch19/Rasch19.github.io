

var hasadded = false;

$("#submit").mousedown(function() {
	
	var button = document.getElementById("submit");
	
	button.style.color = "#ff9900";
	button.style.borderColor = "#ff9900";
    return false;
});

$("#submit").mouseup(function() {
	
	var button = document.getElementById("submit");
	
	button.style.color = "#92bb35";
	button.style.borderColor = "#92bb35";
    return false;
});

$(document).ready(function(){
  $("#submit").click(function(){
    submit();
  });
});

$(document).ready(function(){
  $("span").click(function(){
    $.ajax({
            url : "Lorem.txt",
            dataType: "text",
            success : function (data) {
				if(!hasadded) {
					$("body").append($(data));
					hasadded = true;
				}
            }
        });
  });
});

function submit() {
	
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var email = document.getElementById("email").value;
	var consent = document.getElementById("consent");
	
	
	if(firstname == "")
	{
		alert('Var vänlig fyll i ett förnamn');
	}
	else if(lastname == "")
	{
		alert('Var vänlig fyll i ett efternamn');
	}
	else if(validateEmail(email) == false)
	{
		alert('Var vänlig fyll i en korrekt email-address');
	}
	else if(!consent.checked)
	{
		alert('Var vänlig klicka i consent-knappen');
	}
	
	else
	{
		$.post("savepost.php", {'firstname': firstname, 'lastname': lastname, 'email': email, 'consent': '1'})
		.done(function(data) {
			window.location.replace("winners.php");
		});
	}
}


function validateEmail(email) 
{
	var re = /\S+@\S+\.\S+/;
	return re.test(email);
}