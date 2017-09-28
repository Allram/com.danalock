'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class DanalockV3 extends ZwaveDevice {
	onMeshInit() {
		this.registerCapability('locked', 'DOOR_LOCK');
		this.registerCapability('alarm_battery', 'BATTERY');
		this.registerCapability('measure_battery', 'BATTERY');
	}
}

module.exports = DanalockV3;
