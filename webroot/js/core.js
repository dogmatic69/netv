function fCheckAlive() {
	return true;
}

/**
 * Reload the main page
 *
 * @param boolean vData true to reset
 */
function fServerReset(vData) {
	if (vData == "true" || vData == true) {
		location.href = 'http://localhost/';
	}

	return true;
}

function fButtonPress(vButtonName, vCount, vOnHold) {
	return true;
}