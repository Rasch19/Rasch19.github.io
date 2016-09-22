<?php

	
	$url = $_GET["url"];
	
	$g = file_get_contents('load.json');
	$h = json_decode($g, true);
	$user_input = array();
	
	if($h != null)
	{
		$user_input = $h;
		$arrlength = count($user_input);
		for($x = 0; $x < $arrlength; $x++)
		{
			$j = $user_input[$x];
			if($j["url"] == $url)
			{
					$j['counter'] = ($j['counter'] - 1);
					$user_input[$x] = $j;
					break;
			}
		}
	}
	
	
	$json_string = json_encode($user_input);
	file_put_contents('load.json', $json_string);
	
	die();
	
	
?>