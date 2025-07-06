// v0.4
const SCRIPT_VERSION = '0.4';
const BTHOME_SVC_ID_STR = 'fcd2';

const uint8 = 0;
const int8 = 1;
const uint16 = 2;
const int16 = 3;
const uint24 = 4;
const int24 = 5;
const uint32 = 6;
const int32 = 7;

let SHELLY_ID = undefined;

const BTH = {
    // Misc
    0x00: { n: 'pid', t: uint8 },
    0xf0: { n: 'device_type', t: uint16 },
    0xf1: { n: 'firmware_version', t: uint32 },
    0xf2: { n: 'firmware_version', t: uint24 },
    // Sensor data
    0x51: { n: 'acceleration', t: uint16, f: 0.001, u: 'm/s²' },
    0x01: { n: 'battery', t: uint8, u: '%' },
    0x12: { n: 'co2', t: uint16, u: 'ppm' },
    0x09: { n: 'count', t: uint8 },
    0x3d: { n: 'count', t: uint8 },
    0x3e: { n: 'count', t: uint8 },
    0x43: { n: 'current', t: uint16, f: 0.001, u: 'A' },
    0x08: { n: 'dewpoint', t: int16, f: 0.01, u: '°C' },
    0x40: { n: 'distance_mm', t: uint16, u: 'mm' },
    0x41: { n: 'distance_m', t: uint16, f: 0.1, u: 'm' },
    0x42: { n: 'duration', t: uint24, f: 0.001, u: 's' },
    0x4d: { n: 'energy', t: uint32, f: 0.001, u: 'kWh' },
    0x0a: { n: 'energy', t: uint24, f: 0.001, u: 'kWh' },
    0x4b: { n: 'gas', t: uint24, f: 0.001, u: 'm3' },
    0x4c: { n: 'gas', t: uint32, f: 0.001, u: 'm3' },
    0x52: { n: 'gyroscope', t: uint16, f: 0.001, u: '°/s' },
    0x03: { n: 'humidity', t: uint16, f: 0.01, u: '%' },
    0x2e: { n: 'humidity', t: uint8, u: '%' },
    0x05: { n: 'illuminance', t: uint24, f: 0.01, u: 'lux' },
    0x06: { n: 'mass_kg', t: uint16, f: 0.01, u: 'kg' },
    0x07: { n: 'mass_lb', t: uint16, f: 0.01, u: 'lb' },
    0x14: { n: 'moisture', t: uint16, f: 0.01, u: '%' },
    0x2f: { n: 'moisture', t: uint8, u: '%' },
    0x0d: { n: 'pm2_5', t: uint16, u: 'ug/m3' },
    0x0e: { n: 'pm10', t: uint16, u: 'ug/m3' },
    0x0b: { n: 'power', t: uint24, f: 0.01, u: 'W' },
    0x04: { n: 'pressure', t: uint24, f: 0.01, u: 'hPa' },
    0x3f: { n: 'rotation', t: int16, f: 0.1, u: '°' },
    0x44: { n: 'speed', t: uint16, f: 0.01, u: 'm/s' },
    0x45: { n: 'temperature', t: int16, f: 0.1, u: '°C' },
    0x02: { n: 'temperature', t: int16, f: 0.01, u: '°C' },
    0x13: { n: 'tvoc', t: uint16, u: 'ug/m3' },
    0x0c: { n: 'voltage', t: uint16, f: 0.001, u: 'V' },
    0x4a: { n: 'voltage', t: uint16, f: 0.1, u: 'V' },
    0x4e: { n: 'volume', t: uint32, f: 0.001, u: 'l' },
    0x47: { n: 'volume', t: uint16, f: 0.1, u: 'l' },
    0x48: { n: 'volume', t: uint16, u: 'ml' },
    0x55: { n: 'volume', t: uint32, f: 0.001, u: 'l' },
    0x49: { n: 'volume', t: uint16, f: 0.001, u: 'm3/h' },
    0x46: { n: 'uv_index', t: uint8, f: 0.1 },
    0x4f: { n: 'water', t: uint32, f: 0.001, u: 'l' },
    // Binary Sensor data
    0x15: { n: 'battery', t: uint8 },
    0x16: { n: 'battery_charging', t: uint8 },
    0x17: { n: 'carbon_monoxide', t: uint8 },
    0x18: { n: 'cold', t: uint8 },
    0x19: { n: 'connectivity', t: uint8 },
    0x1a: { n: 'door', t: uint8 },
    0x1b: { n: 'garage_door', t: uint8 },
    0x1c: { n: 'gas', t: uint8 },
    0x0f: { n: 'generic_boolean', t: uint8 },
    0x1d: { n: 'heat', t: uint8 },
    0x1e: { n: 'light', t: uint8 },
    0x1f: { n: 'lock', t: uint8 },
    0x20: { n: 'moisture', t: uint8 },
    0x21: { n: 'motion', t: uint8 },
    0x22: { n: 'moving', t: uint8 },
    0x23: { n: 'occupancy', t: uint8 },
    0x11: { n: 'opening', t: uint8 },
    0x24: { n: 'plug', t: uint8 },
    0x10: { n: 'power', t: uint8 },
    0x25: { n: 'presence', t: uint8 },
    0x26: { n: 'problem', t: uint8 },
    0x27: { n: 'running', t: uint8 },
    0x28: { n: 'safety', t: uint8 },
    0x29: { n: 'smoke', t: uint8 },
    0x2a: { n: 'sound', t: uint8 },
    0x2b: { n: 'tamper', t: uint8 },
    0x2c: { n: 'vibration', t: uint8 },
    0x2d: { n: 'window', t: uint8 },
    // Events
    0x3a: { n: 'button', t: uint8, b: 1 },
    0x3c: { n: 'dimmer', t: uint8 }
};

function getByteSize(type) {
    if (type === uint8 || type === int8) return 1;
    if (type === uint16 || type === int16) return 2;
    if (type === uint24 || type === int24) return 3;
    // impossible as advertisements are much smaller
    return 255;
}

let BTHomeDecoder = {
    utoi: function (num, bitsz) {
        let mask = 1 << (bitsz - 1);
        return num & mask ? num - (1 << bitsz) : num;
    },
    getUInt8: function (buffer) {
        return buffer.at(0);
    },
    getInt8: function (buffer) {
        return this.utoi(this.getUInt8(buffer), 8);
    },
    getUInt16LE: function (buffer) {
        return 0xffff & ((buffer.at(1) << 8) | buffer.at(0));
    },
    getInt16LE: function (buffer) {
        return this.utoi(this.getUInt16LE(buffer), 16);
    },
    getUInt24LE: function (buffer) {
        return (
            0x00ffffff & ((buffer.at(2) << 16) | (buffer.at(1) << 8) | buffer.at(0))
        );
    },
    getInt24LE: function (buffer) {
        return this.utoi(this.getUInt24LE(buffer), 24);
    },
    getUInt32LE: function (buffer) {
        return (
            0x00ffffffff & ((buffer.at(3) << 24) | (buffer.at(2) << 16) | (buffer.at(1) << 8) | buffer.at(0))
        );
    },
    getInt32LE: function (buffer) {
        return this.utoi(this.getUInt32LE(buffer), 32);
    },
    getBufValue: function (type, buffer) {
        if (buffer.length < getByteSize(type)) return null;
        let res = null;
        if (type === uint8) res = this.getUInt8(buffer);
        if (type === int8) res = this.getInt8(buffer);
        if (type === uint16) res = this.getUInt16LE(buffer);
        if (type === int16) res = this.getInt16LE(buffer);
        if (type === uint24) res = this.getUInt24LE(buffer);
        if (type === int24) res = this.getInt24LE(buffer);
        if (type === uint32) res = this.getUInt32LE(buffer);
        if (type === int32) res = this.getInt32LE(buffer);
        return res;
    },
    unpack: function (buffer) {
        // beacons might not provide BTH service data
        if (typeof buffer !== 'string' || buffer.length === 0) return null;
        let result = {};
        let _dib = buffer.at(0);
        result['encryption'] = _dib & 0x1 ? true : false;
        result['BTHome_version'] = _dib >> 5;
        if (result['BTHome_version'] !== 2) return null;
        // can not handle encrypted data
        if (result['encryption']) return result;
        buffer = buffer.slice(1);

        let _bth;
        let _value;
        let _name;
        let _btnNum = 1;
        while (buffer.length > 0) {
            _bth = BTH[buffer.at(0)];
            if (typeof _bth === 'undefined') {
                console.log('Error: unknown type ' + buffer.at(0));
                break;
            }
            buffer = buffer.slice(1);
            _value = this.getBufValue(_bth.t, buffer);
            if (_value === null) break;
            if (typeof _bth.f !== 'undefined') _value = _value * _bth.f;

            _name = _bth.n;
            if (typeof _bth.b !== "undefined") {
                _name = _name + '_' + _btnNum.toString();
                _btnNum++;
            }

            result[_name] = _value;
            buffer = buffer.slice(getByteSize(_bth.t));
        }
        return result;
    }
};

let lastPacketId = 0x100;

// Callback for the BLE scanner object
function bleScanCallback(event, result) {
    // exit if not a result of a scan
    if (event !== BLE.Scanner.SCAN_RESULT) {
        return;
    }

    // exit if service_data member is missing
    if (
        typeof result.service_data === 'undefined' ||
        typeof result.service_data[BTHOME_SVC_ID_STR] === 'undefined'
    ) {
        // console.log('Error: Missing service_data member');
        return;
    }

    let unpackedData = BTHomeDecoder.unpack(
        result.service_data[BTHOME_SVC_ID_STR]
    );

    // exit if unpacked data is null or the device is encrypted
    if (
        unpackedData === null ||
        typeof unpackedData === 'undefined' ||
        unpackedData['encryption']
    ) {
        console.log('Error: Encrypted devices are not supported');
        return;
    }

    // exit if the event is duplicated
    if (lastPacketId === unpackedData.pid) {
        return;
    }

    lastPacketId = unpackedData.pid;

    unpackedData.rssi = result.rssi;
    unpackedData.address = result.addr;

    // create MQTT-Payload
    let message = {
        scriptVersion: SCRIPT_VERSION,
        src: SHELLY_ID,
        srcBle: {
            type: result.local_name,
            mac: result.addr
        },
        payload: unpackedData
    };

    console.log('Received ' + JSON.stringify(unpackedData));

    if (MQTT.isConnected()) {
        MQTT.publish(SHELLY_ID + '/events/ble', JSON.stringify(message));
    }
}

// Initializes the script and performs the necessary checks and configurations
function init() {
    // get the config of ble component
    let bleConfig = Shelly.getComponentConfig('ble');

    // exit if the BLE isn't enabled
    if (!bleConfig.enable) {
        console.log('Error: The Bluetooth is not enabled, please enable it in the settings');
        return;
    }

    // check if the scanner is already running
    if (BLE.Scanner.isRunning()) {
        console.log('Info: The BLE gateway is running, the BLE scan configuration is managed by the device');
    } else {
        // start the scanner
        let bleScanner = BLE.Scanner.Start({
            duration_ms: BLE.Scanner.INFINITE_SCAN,
            active: true
        });

        if (!bleScanner) {
            console.log('Error: Can not start new scanner');
        }
    }

    BLE.Scanner.Subscribe(bleScanCallback);
}

Shelly.call('Mqtt.GetConfig', '', function (res, err_code, err_msg, ud) {
    SHELLY_ID = res['topic_prefix'];

    init();
});