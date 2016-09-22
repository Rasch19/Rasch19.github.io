<?php

	
	$url = $_GET["url"];
	
	$load_g = file_get_contents('load.json');
	$load_h = json_decode($load_g, true);
	$load_h_length = count($load_h);
	$load_input = array();
	$foo = false;
	
	if($load_h != null)
	{
		for($i = 0; $i < $load_h_length; $i++)
		{
			$j = $load_h[$i];
			if($j["url"] == $url)
			{
				$j["counter"] = ($j["counter"] + 1);
				$foo = true;
			}
			if($j["counter"] > 0)
			{
				array_push($load_input, $j);
			}
		}
	}
	if($foo == false)
	{
		$p = array( "url" => $url, "counter" => 1);
		array_push($load_input, $p);
	}
	
	$load_json = json_encode($load_input);
	file_put_contents('load.json', $load_json);
	
	$load_input_length = count($load_input);
	
	$url_g = file_get_contents('urls.json');
	$url_h = json_decode($url_g, true);
	$url_h_length = count($url_h);
	$url_input = array();
	
	if($url_h != null)
	{
		for($u = 0; $u < $url_h_length; $u++)
		{
			$k = $url_h[$u];
			for($y = 0; $y < $load_input_length; $y++)
			{
				$l = $load_input[$y];
				if($k["url"] == $l["url"])
				{
					array_push($url_input, $k);
				}
			}
		}
	}
	
	
	$url_json = json_encode($url_input);
	file_put_contents('urls.json', $url_json);
	
	
	
	
?>