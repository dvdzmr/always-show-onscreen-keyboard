import Clutter from 'gi://Clutter';


export default class OnScreenKeyboard {

    enable() {
        this.defaultMode = Clutter.get_default_backend().get_default_seat().get_touch_mode;
        this.touchMode = Clutter.get_default_backend().get_default_seat();       
		this.touchMode.get_touch_mode = () => true;
	}
	
	disable() {
        // Nullifying touchmode by setting it back to default:
		this.touchMode.get_touch_mode = this.defaultMode;
		this.touchMode = null;
	}
}