var keyPressedArray = new Array(),
	weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=telford&mode=html';

$(document).ready(function() {
	$.get(weatherUrl, function(data) {
		$('#weather').html(data);
	});
})