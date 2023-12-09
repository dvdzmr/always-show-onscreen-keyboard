import Clutter from 'gi://Clutter';

let defaultMode = Clutter.get_default_backend().get_default_seat().get_touch_mode;

export default class OnScreenKeyboard {
	touchMode = Clutter.get_default_backend().get_default_seat();
	
    enable() {
		this.touchMode.get_touch_mode = () => true;
	}
	
	disable() {
		this.touchMode.get_touch_mode = defaultMode;
	}
}