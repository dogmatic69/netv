var keyPressedArray = new Array();

$(document).keydown(function(event) {
	var keycode = event.which;
	var isRepeat = (keyPressedArray[""+keycode] == true) ? true : false;
	keyPressedArray[""+keycode] = true;

	//event.preventDefault();
	if (keycode == 37) {
		//fButtonPress('left', 1, isRepeat);
	} else if (keycode == 39) {
		//fButtonPress('right', 1, isRepeat);
	} else if (keycode == 38) {
		//fButtonPress('up', 1, isRepeat);	
	} else if (keycode == 40) {
		//fButtonPress('down', 1, isRepeat);
	} else if (keycode == 13) {
		//fButtonPress('center', 1, isRepeat);
	} else if (keycode == 33) {
		//fButtonPress('cpanel', 1, isRepeat);
		$('.config').toggle();
	} else if (keycode == 34) {
		//fButtonPress('widget', 1, isRepeat);
	} 

	return true;
});

$(document).keyup(function(event) {
	keyPressedArray['' + event.which] = false;
	return true;
});