import Clutter from 'gi://Clutter';

export default class OnScreenKeyboard {
    enable() {
        this.touchMode = Clutter.get_default_backend().get_default_seat();
        this.touchMode.get_touch_mode = () => true;
    }

    disable() {
        this.touchMode = null;
    }
}