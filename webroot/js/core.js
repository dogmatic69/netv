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
	if (vOnHold && (vButtonName == "cpanel" || vButtonName == "widget" || vButtonName == "widget" || vButtonName == "setup")) {
		return true;
	}

	switch (vButtonName) {
		case "cpanel": 
			$('.config').toggle();
			//mJSCore.fOnSignal(cConst.SIGNAL_TOGGLE_CONTROLPANEL); 
			break;

		case "widget": 
			//mJSCore.fOnSignal(cConst.SIGNAL_TOGGLE_WIDGETENGINE);
			break;
		
		case "left": 
			//mJSCore.fOnSignal(cConst.SIGNAL_BUTTON_LEFT);
			break;
		
		case "right": 
			//mJSCore.fOnSignal(cConst.SIGNAL_BUTTON_RIGHT);
			break;
		
		case "center": 
			//mJSCore.fOnSignal(cConst.SIGNAL_BUTTON_CENTER);
			break;
		
		case "up": 
			//mJSCore.fOnSignal(cConst.SIGNAL_BUTTON_UP);
			break;
		
		case "down": 
			//mJSCore.fOnSignal(cConst.SIGNAL_BUTTON_DOWN);
			break;

		case "setup":
			mCPanel.fOnSignal("signal_goto_controlpanel", ["help"], null);
			break;
	}
	//~ keyboard_onRemoteControl(vButtonName, "input_username");
	return true;
}