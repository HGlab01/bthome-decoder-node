const rawtext = -1;
const uint8 = 0;
const int8 = 1;
const uint16 = 2;
const int16 = 3;
const uint24 = 4;
const int24 = 5;
const uint32 = 6;
const int32 = 7;

const BTH = {
    // Misc
    0x00: { n: 'pid', t: uint8 },
    0xf0: { n: 'device_type', t: uint16 },
    0xf1: { n: 'firmware_version', t: uint32 },
    0xf2: { n: 'firmware_version', t: uint24 },
    0x60: { n: 'channel', t: uint8 },
    // Sensor data
    0x51: { n: 'acceleration', t: uint16, f: 0.001, u: 'm/s²' },
    0x01: { n: 'battery', t: uint8, u: '%' },
    0x12: { n: 'co2', t: uint16, u: 'ppm' },
    0x09: { n: 'count', t: uint8 },
    0x3d: { n: 'count', t: uint16 },
    0x3e: { n: 'count', t: uint32 },
    0x59: { n: 'count', t: int8 },
    0x5a: { n: 'count', t: int16 },
    0x5b: { n: 'count', t: int32 },
    0x43: { n: 'current', t: uint16, f: 0.001, u: 'A' },
    0x5d: { n: 'current', t: int16, f: 0.001, u: 'A' },
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
    0x5c: { n: 'power', t: int32, f: 0.01, u: 'W' },
    0x04: { n: 'pressure', t: uint24, f: 0.01, u: 'hPa' },
    0x3f: { n: 'rotation', t: int16, f: 0.1, u: '°' },
    0x44: { n: 'speed', t: uint16, f: 0.01, u: 'm/s' },
    0x57: { n: 'temperature', t: int8, u: '°C' },
    0x58: { n: 'temperature', t: int8, f: 0.35, u: '°C' },
    0x45: { n: 'temperature', t: int16, f: 0.1, u: '°C' },
    0x02: { n: 'temperature', t: int16, f: 0.01, u: '°C' },
    0x13: { n: 'tvoc', t: uint16, u: 'ug/m3' },
    0x0c: { n: 'voltage', t: uint16, f: 0.001, u: 'V' },
    0x4a: { n: 'voltage', t: uint16, f: 0.1, u: 'V' },
    0x4e: { n: 'volume', t: uint32, f: 0.001, u: 'l' },
    0x47: { n: 'volume', t: uint16, f: 0.1, u: 'l' },
    0x48: { n: 'volume', t: uint16, u: 'ml' },
    0x55: { n: 'volume_storage', t: uint32, f: 0.001, u: 'l' },
    0x49: { n: 'volume_flowrate', t: uint16, f: 0.001, u: 'm3/h' },
    0x46: { n: 'uv_index', t: uint8, f: 0.1 },
    0x4f: { n: 'water', t: uint32, f: 0.001, u: 'l' },
    0x5e: { n: 'direction', t: uint16, f: 0.01, u: '°' },
    0x5f: { n: 'precipitation', t: uint16, u: 'mm' },
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
    0x3c: { n: 'dimmer', t: uint8 },
    // Text / Raw
    0x54: { n: 'raw', t: rawtext },
    0x53: { n: 'text', t: rawtext },
};

/**
 * Klasse zum Dekodieren von BTHome-Daten-Payloads.
 * Diese Version ist optimiert für Node.js Buffer-Operationen.
 */
class BleDecoder {
    utoi(num, bitsz) {
        let mask = 1 << (bitsz - 1);
        return num & mask ? num - (1 << bitsz) : num;
    }

    getUInt8(buffer, offset) { return buffer.readUInt8(offset); }
    getInt8(buffer, offset) { return buffer.readInt8(offset); }
    getUInt16LE(buffer, offset) { return buffer.readUInt16LE(offset); }
    getInt16LE(buffer, offset) { return buffer.readInt16LE(offset); }
    getUInt24LE(buffer, offset) { return buffer.readUIntLE(offset, 3); }
    getInt24LE(buffer, offset) { return this.utoi(this.getUInt24LE(buffer, offset), 24); }
    getUInt32LE(buffer, offset) { return buffer.readUInt32LE(offset); }
    getInt32LE(buffer, offset) { return buffer.readInt32LE(offset); }

    getByteSize(type) {
        if (type === uint8 || type === int8) return 1;
        if (type === uint16 || type === int16) return 2;
        if (type === uint24 || type === int24) return 3;
        if (type === uint32 || type === int32) return 4;
        if (type === rawtext) return -1; // Indikator für variable Länge
        return 0;
    }

    getBufValue(type, buffer, offset) {
        const expectedSize = this.getByteSize(type);
        if (expectedSize !== -1 && buffer.length < offset + expectedSize) {
            // Loggen in Node-RED: this.error() sollte verwendet werden, um Fehler im Debug-Tab anzuzeigen
            // node.error(`Error: Buffer too short for type ${type} at offset ${offset}. Expected ${expectedSize}, got ${buffer.length - offset} remaining bytes.`);
            return null;
        }

        let res = null;
        if (type === uint8) res = this.getUInt8(buffer, offset);
        else if (type === int8) res = this.getInt8(buffer, offset);
        else if (type === uint16) res = this.getUInt16LE(buffer, offset);
        else if (type === int16) res = this.getInt16LE(buffer, offset);
        else if (type === uint24) res = this.getUInt24LE(buffer, offset);
        else if (type === int24) res = this.getInt24LE(buffer, offset);
        else if (type === uint32) res = this.getUInt32LE(buffer, offset);
        else if (type === int32) res = this.getInt32LE(buffer, offset);
        else if (type === rawtext) {
            res = buffer.toString('utf8', offset);
        }
        return res;
    }

    unpack(buffer, encryptedPayload = false) {
        if (!Buffer.isBuffer(buffer) || buffer.length === 0) {
            // node.error('Error: Input is not a Buffer or is empty.');
            return null;
        }

        let result = {};
        let offset = 0;

        if (!encryptedPayload) {
            if (buffer.length === 0) {
                // node.error('Error: Buffer too short for DIB.');
                return null;
            }
            let _dib = buffer.readUInt8(offset++);
            result['encryption'] = (_dib & 0x1) ? true : false;
            result['BTHome_version'] = _dib >> 5;

            if (result['BTHome_version'] !== 2) {
                // node.warn('Warning: Unsupported BTHome version:' + result['BTHome_version']);
                return null; // Im Node-RED Kontext möchten wir vielleicht null zurückgeben, wenn die Version nicht passt.
            }
            if (result['encryption']) {
                // node.warn('Warning: Encrypted BTHome data cannot be decoded.');
                return result;
            }
        }

        let _value;
        let _name;
        let _btnNum = 1;

        while (offset < buffer.length) {
            const currentByte = buffer.readUInt8(offset++);
            const _bth = BTH[currentByte];

            if (typeof _bth === 'undefined') {
                // node.error('Error: Unknown BTHome object type 0x' + currentByte.toString(16) + ' at offset ' + (offset - 1));
                break;
            }

            _name = _bth.n;

            _value = this.getBufValue(_bth.t, buffer, offset);
            if (_value === null) {
                // node.error(`Error: Could not read value for type ${_bth.t} (name: ${_name}) at offset ${offset}.`);
                break;
            }

            if (typeof _bth.f !== 'undefined' && _bth.t !== rawtext) {
                _value = parseFloat((_value * _bth.f).toFixed(3));
            }

            if (typeof _bth.b !== 'undefined') {
                _name = `${_name}_${_btnNum.toString()}`;
                _btnNum++;
            }

            result[_name] = _value;

            if (_bth.t !== rawtext) {
                offset += this.getByteSize(_bth.t);
            } else {
                // Für rawtext wurde der Rest des Buffers gelesen, der Offset ist bereits am Ende
                offset = buffer.length;
            }
        }

        return result;
    }
}

// Die Node-RED Node-Definition
module.exports = function (RED) {
    function BTHomeDecoderNode(config) {
        RED.nodes.createNode(this, config);
        const node = this;
        const decoder = new BleDecoder(); // Eine Instanz des Decoders pro Node

        node.on('input', function (msg, send, done) {
            // Stelle sicher, dass send und done Funktionen sind (Node-RED 1.0+)
            send = send || function () { node.send.apply(node, arguments); };
            done = done || function (err) { if (err) node.error(err, msg); };

            let inputBuffer;

            //wenn es ein Objekt ist, dann serialisieren
            if (typeof msg.payload === 'object' && msg.payload !== null) msg.payload = JSON.stringify(msg.payload);

            // Eingabe kann ein Buffer sein (wenn von einem BLE-Scanner oder UDP-Node)
            // oder ein Hex-String (wenn von MQTT wie Shelly v1.0)
            if (Buffer.isBuffer(msg.payload)) {
                inputBuffer = msg.payload;
            } else if (typeof msg.payload === 'string') {
                // Prüfen, ob es ein JSON-String mit 'payload' Feld ist (wie Shelly v1.0)
                try {
                    const parsedPayload = JSON.parse(msg.payload);
                    if (typeof parsedPayload.payload === 'string') {
                        // Shelly v1.0 MQTT-Format: "payload": "021c01..."
                        inputBuffer = Buffer.from(parsedPayload.payload, 'hex');
                        node.status({ fill: "blue", shape: "dot", text: "Received MQTT Hex" });
                    } else {
                        node.status({ fill: "red", shape: "dot", text: "Invalid MQTT Payload" });
                        node.error("MQTT payload is not a string hex or contains no 'payload' field.", msg);
                        return done();
                    }
                } catch (e) {
                    // Wenn es kein JSON ist, versuchen wir es als reinen Hex-String
                    try {
                        inputBuffer = Buffer.from(msg.payload, 'hex');
                        node.status({ fill: "blue", shape: "dot", text: "Received Raw Hex" });
                    } catch (err) {
                        node.status({ fill: "red", shape: "dot", text: "Invalid Input" });
                        node.error("Input payload is not a Buffer, a valid hex string, or a Shelly v1.0 MQTT JSON.", msg);
                        return done();
                    }
                }
            } else {
                node.status({ fill: "red", shape: "dot", text: "Invalid Input Type" });
                node.error("Input payload must be a Buffer or a string (hex or Shelly v1.0 MQTT JSON).", msg);
                return done();
            }

            if (!inputBuffer || inputBuffer.length === 0) {
                node.status({ fill: "red", shape: "dot", text: "Empty Buffer" });
                node.warn("Input buffer is empty after conversion.");
                return done();
            }

            const decodedData = decoder.unpack(inputBuffer);

            if (decodedData) {
                msg.payload = decodedData;
                node.status({ fill: "green", shape: "dot", text: "Decoded" });
                send(msg); // Sende die dekodierten Daten an den nächsten Node
            } else {
                node.status({ fill: "yellow", shape: "dot", text: "Decode Failed/Encrypted" });
                node.warn("BTHome decoding failed or data was encrypted. Check Node-RED logs for details.");
                // Sende die Originalnachricht, falls es Debugging-Zwecke gibt oder die Daten
                // nur verschlüsselt waren und weitergeleitet werden sollen
                // send(msg); 
            }
            done();
        });

        // Optional: Aufräumarbeiten, wenn der Node entfernt wird
        node.on('close', function () {
            node.log('BTHome Decoder Node closed.');
        });
    }
    RED.nodes.registerType("bthome-decoder", BTHomeDecoderNode);
};