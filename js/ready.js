$(document).ready(function(){
	var ids = ["play1", "play2", "play3", "play4", "play5"];
	var element = document.getElementById("p1");
	var button = document.getElementById("Add");
	var check = setInterval(function() {
		var pn = parseInt(element.innerHTML);
		for(i = 0; i < 5; i++)
		{
			if( i < pn)
			{
				document.getElementById(ids[i]).src = "img/ready.jpg";
				if(i == 4)
				{
					var audio = new Audio('Dota2_music_respawn.mp3');
					audio.play();
					clearInterval(check);
				}
				
			}
			else
			{
				document.getElementById(ids[i]).src = "img/unready.png";
			}
		}
	}, 10);
});