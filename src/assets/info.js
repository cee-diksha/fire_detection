export const info = [
    { id: 1, status: ["success"], tempSetpoint: 50, smokeSensor: true, triggeringDevice: null, axis: 'X-Y-Z', node_type: "sensor", node_name: "Engine Room", node_id: 101, battery_percentage: "100", temp: "50", last_update: "12/9/24 11:54:58", isDeleted: false, deck: 2, compartment: 1 , status_log: "", connectedTo: [102]},
    { id: 2, status: ["deleted"], tempSetpoint: null, smokeSensor: null, triggeringDevice: null, axis: 'X-Y-Z', node_type: "repeater", node_name: "GT Room", node_id: 102, battery_percentage: "0", temp: null, last_update: "12/9/24 10:14:18", isDeleted: true, deck: 2, compartment: 1 , status_log: "needs replacement" , connectedTo: []},
    { id: 3, status: ["success"], tempSetpoint: 50, smokeSensor: null, triggeringDevice: false, axis: 'X-Y-Z', node_type: "suppressor", node_name: "Boiler Room", node_id: 103, battery_percentage: "100", temp: null, last_update: "12/9/24 15:24:08", isDeleted: false, deck: 2, compartment: 1 , status_log: "" , connectedTo: [102]},
    { id: 4, status: ["orange", "yellow", "smoke"], tempSetpoint: 50, smokeSensor: true, triggeringDevice: null, axis: 'X-Y-Z', node_type: "sensor", node_name: "Gallery", node_id: 104, battery_percentage: "20", temp: "75", last_update: "12/9/24 11:54:58", isDeleted: false, deck: 3, compartment: 3 , status_log: "smoke detected, temp rising, low battery" , connectedTo: [115]},
    { id: 5, status: ["success"], tempSetpoint: 50, smokeSensor: null, triggeringDevice: false, axis: 'X-Y-Z', node_type: "suppressor", node_name: "SS Dining Hall", node_id: 105, battery_percentage: "98", temp: null, last_update: "12/9/24 11:54:58", isDeleted: false, deck: 3, compartment: 7 , status_log: "" , connectedTo: [115]},
    { id: 6, status: ["danger"], tempSetpoint: 50, smokeSensor: true, triggeringDevice: null, axis: 'X-Y-Z', node_type: "sensor", node_name: "VS Dining Hall", node_id: 106, battery_percentage: "100", temp: "80", last_update: "12/9/24 11:54:58", isDeleted: false, deck: 5, compartment: 5 , status_log: "fire detected" , connectedTo: [119]},
    { id: 7, status: ["success"], tempSetpoint: null, smokeSensor: null, triggeringDevice: null, axis: 'X-Y-Z', node_type: "repeater", node_name: "Main Switch Board", node_id: 107, battery_percentage: "90", temp: null, last_update: "12/9/24 11:54:58", isDeleted: false, deck: 4, compartment: 6 , status_log: "" , connectedTo: []},
    { id: 8, status: ["orange", "smoke"], tempSetpoint: 50, smokeSensor: false, triggeringDevice: null, axis: 'X-Y-Z', node_type: "sensor", node_name: "MCO", node_id: 108, battery_percentage: "98", temp: "65", last_update: "12/9/24 11:54:58", isDeleted: false, deck: 1, compartment: 9 , status_log: "smoke detected, temp rising" , connectedTo: [116]},
    { id: 9, status: ["success"], tempSetpoint: 50, smokeSensor: true, triggeringDevice: null, axis: 'X-Y-Z', node_type: "sensor", node_name: "Engg JS Mess", node_id: 109, battery_percentage: "100", temp: "50", last_update: "12/9/24 11:54:58", isDeleted: false, deck: 6, compartment: 2 , status_log: "" , connectedTo: [112]},
    { id: 10, status: ["yellow"], tempSetpoint: 50, smokeSensor: null, triggeringDevice: false, axis: 'X-Y-Z', node_type: "suppressor", node_name: "Engg SS Mess", node_id: 110, battery_percentage: "32", temp: null, last_update: "12/9/24 11:54:58", isDeleted: false, deck: 1, compartment: 1 , status_log: "low battery" , connectedTo: [116]},
    { id: 11, status: ["danger", "yellow", "smoke"], tempSetpoint: 50, smokeSensor: true, triggeringDevice: null, axis: 'X-Y-Z', node_type: "sensor", node_name: "Spare Gear Store", node_id: 111, battery_percentage: "35", temp: "80", last_update: "12/9/24 11:54:58", isDeleted: false, deck: 4, compartment: 5 , status_log: "fire and smoke detected, low battery" , connectedTo: [107]},
    { id: 12, status: ["success"], tempSetpoint: null, smokeSensor: null, triggeringDevice: null, axis: 'X-Y-Z', node_type: "repeater", node_name: "CMR", node_id: 112, battery_percentage: "100", temp: null, last_update: "12/9/24 11:54:58", isDeleted: false, deck: 6, compartment: 2 , status_log: "" , connectedTo: []},
    { id: 13, status: ["success"], tempSetpoint: 50, smokeSensor: null, triggeringDevice: false, axis: 'X-Y-Z', node_type: "suppressor", node_name: "AC Compartment", node_id: 113, battery_percentage: "100", temp: null, last_update: "12/9/24 11:54:58", isDeleted: false, deck: 4, compartment: 5 , status_log: "" , connectedTo: [107]},
    { id: 14, status: ["danger", "smoke"], tempSetpoint: 50, smokeSensor: false, triggeringDevice: null, axis: 'X-Y-Z', node_type: "sensor", node_name: "ASP", node_id: 114, battery_percentage: "99", temp: "75", last_update: "12/9/24 11:54:58", isDeleted: false, deck: 5, compartment: 2 , status_log: "fire and smoke detected" , connectedTo: [119]},
    { id: 15, status: ["success"], tempSetpoint: null, smokeSensor: null, triggeringDevice: null, axis: 'X-Y-Z', node_type: "repeater", node_name: "Pump Room", node_id: 115, battery_percentage: "100", temp: null, last_update: "12/9/24 11:54:58", isDeleted: false, deck: 3, compartment: 1 , status_log: "" , connectedTo: []},
    { id: 16, status: ["success"], tempSetpoint: null, smokeSensor: null, triggeringDevice: null, axis: 'X-Y-Z', node_type: "repeater", node_name: "Cabin Flat", node_id: 116, battery_percentage: "96", temp: null, last_update: "12/9/24 11:54:58", isDeleted: false, deck: 1, compartment: 8 , status_log: "" , connectedTo: []},
    { id: 17, status: ["success"], tempSetpoint: 50, smokeSensor: null, triggeringDevice: false, axis: 'X-Y-Z', node_type: "suppressor", node_name: "Fwd JS Mess", node_id: 117, battery_percentage: "100", temp: null, last_update: "12/9/24 11:54:58", isDeleted: false, deck: 6, compartment: 9 , status_log: "" , connectedTo: [112]},
    { id: 18, status: ["smoke"], tempSetpoint: 50, smokeSensor: true, triggeringDevice: null, axis: 'X-Y-Z', node_type: "sensor", node_name: "Fwd SS Mess", node_id: 118, battery_percentage: "90", temp: "49", last_update: "12/9/24 11:54:58", isDeleted: false, deck: 5, compartment: 11 , status_log: "smoke detected" , connectedTo: [119]},
    { id: 19, status: ["success"], tempSetpoint: null, smokeSensor: null, triggeringDevice: null, axis: 'X-Y-Z', node_type: "repeater", node_name: "comp 0", node_id: 119, battery_percentage: "90", temp: null, last_update: "12/9/24 11:54:58", isDeleted: false, deck: 5, compartment: 8 , status_log: "" , connectedTo: []},
    { id: 20, status: ["success"], tempSetpoint: null, smokeSensor: null, triggeringDevice: false, axis: 'X-Y-Z', node_type: "suppressor", node_name: "comp 1", node_id: 120, battery_percentage: "90", temp: null, last_update: "12/9/24 11:54:58", isDeleted: false, deck: 5, compartment: 5, status_log: "" , connectedTo: [119]},
    { id: 21, status: ["success"], tempSetpoint: null, smokeSensor: null, triggeringDevice: false, axis: 'X-Y-Z', node_type: "suppressor", node_name: "comp 2", node_id: 121, battery_percentage: "90", temp: null, last_update: "12/9/24 11:54:58", isDeleted: false, deck: 5, compartment: 2, status_log: "" , connectedTo: [119]},
]

export const deckInfo = [
    {
        id: "1", deck: 1, devices: [
            { comp: 1, node_info: [{ node: 110, status: ["yellow"] }] },
            { comp: 8, node_info: [{ node: 116, status: ["success"] }] },
            { comp: 9, node_info: [{ node: 108, status: ["orange", "smoke"]}]}
        ]
    },
    {
        id: "2", deck: 2, devices: [
            { comp: 1, node_info: [{ node: 102, status: ["deleted"] }, { node: 101, status: ["success"] }, { node: 103, status: ["success"] }] }
        ]
    },
    {
        id: "3", deck: 3, devices: [
            { comp: 1, node_info: [{ node: 115, status: ["success"] }] },
            { comp: 7, node_info: [{ node: 105, status: ["success"] }] },
            { comp: 3, node_info: [{ node: 104, status: ["orange", "yellow"]}] },
        ]
    },
    {
        id: "4", deck: 4, devices: [
            { comp: 5, node_info: [{ node: 111, status: ["danger", "yellow", "smoke"]}, { node: 113, status: ["success"] }] },
            { comp: 6, node_info: [{ node: 107, status: ["success"] }] }
        ]
    },
    {
        id: "5", deck: 5, devices: [
            { comp: 2, node_info: [{ node: 114, status: ["danger", "smoke"] }, { node: 121, status: ["success"] }] },
            { comp: 5, node_info: [{ node: 106, status: ["danger" ]}, { node: 120, status: ["success"] }] },
            { comp: 11, node_info: [{ node: 118, status: ["smoke"] }] },
            { comp: 8, node_info: [{ node: 119, status: ["success"] }] },
        ]
    },
    {
        id: "6", deck: 6, devices: [
            { comp: 2, node_info: [{ node: 109, status: ["success"] }, { node: 112, status: ["success"] }] },
            { comp: 9, node_info: [{ node: 117, status: ["success"] }] },
        ]
    }
];

export const specificDeviceChartData = [
    {
        node_type: "sensor", node_name: "Engine Room", node_id: 101, deck: 2, comp: 1,  alertlogstemp: [], alertlogsbattery: [], temperature: [
            { time: "11", value: "50", info: "[INFO]", status: "Sensor initialized" },
            { time: "12", value: "49", info: "[INFO]", status: "Sensor working fine" },
            { time: "13", value: "45", info: "[INFO]", status: "Sensor working fine" },
            { time: "14", value: "47", info: "[INFO]", status: "Sensor working fine" },
            { time: "15", value: "48", info: "[INFO]", status: "Sensor working fine" },
            { time: "16", value: "47", info: "[INFO]", status: "Sensor working fine" },
            { time: "17", value: "46", info: "[INFO]", status: "Sensor working fine" },
            { time: "18", value: "47", info: "[INFO]", status: "Sensor working fine" },
            { time: "19", value: "48", info: "[INFO]", status: "Sensor working fine" },
            { time: "20", value: "47", info: "[INFO]", status: "Sensor working fine" },
            { time: "21", value: "46", info: "[INFO]", status: "Sensor working fine" },
            { time: "22", value: "47", info: "[INFO]", status: "Sensor working fine" }
        ], battery_percentage: [
            { time: "11", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "12", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "13", value: "99", info: "[WARN]", status: "Battery dropping" },
            { time: "14", value: "99", info: "[WARN]", status: "Battery dropping" },
            { time: "15", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "16", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "17", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "18", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "19", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "20", value: "95", info: "[WARN]", status: "Battery dropping" },
            { time: "21", value: "95", info: "[WARN]", status: "Battery dropping" },
            { time: "22", value: "94", info: "[WARN]", status: "Battery dropping" }
        ]
    },
    {
        node_type: "repeater", node_name: "GT Room", node_id: 102, deck: 2, comp: 1, alertlogstemp: null, alertlogsbattery: [ { time: "0800 hrs", message: "Battery level at 50%" },
            { time: "1000 hrs", message: "Battery level at 40%" },
            { time: "1200 hrs", message: "Battery level at 30%" },
            { time: "1300 hrs", message: "Battery level at 20% — warning: battery low" },
            { time: "1400 hrs", message: "Battery level at 10% — critical battery level" },
            { time: "1500 hrs", message: "Battery level at 5% — urgent replacement required" },
            { time: "1600 hrs", message: "Device shutdown — battery depleted" }], temperature: null, battery_percentage: [
            { time: "11", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "12", value: "94", info: "[INFO]", status: "Battery OK" },
            { time: "13", value: "86", info: "[WARN]", status: "Battery dropping" },
            { time: "14", value: "77", info: "[WARN]", status: "Battery dropping" },
            { time: "15", value: "64", info: "[WARN]", status: "Battery dropping" },
            { time: "16", value: "55", info: "[WARN]", status: "Battery dropping" },
            { time: "17", value: "42", info: "[WARN]", status: "Battery dropping" },
            { time: "18", value: "33", info: "[WARN]", status: "Battery dropping" },
            { time: "19", value: "30", info: "[WARN]", status: "Needs Replacement" },
            { time: "20", value: "20", info: "[WARN]", status: "Needs Replacement" },
            { time: "21", value: "15", info: "[WARN]", status: "Needs Replacement" },
            { time: "22", value: "0", info: "[WARN]", status: "Battery Dead" }
        ]
    },
    {
        node_type: "suppression unit", node_name: "Boiler Room", node_id: 103, deck:2, comp: 3, alertlogstemp: null, alertlogsbattery: [], temperature: null, battery_percentage: [
            { time: "11", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "12", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "13", value: "99", info: "[WARN]", status: "Battery dropping" },
            { time: "14", value: "99", info: "[WARN]", status: "Battery dropping" },
            { time: "15", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "16", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "17", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "18", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "19", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "20", value: "95", info: "[WARN]", status: "Battery dropping" },
            { time: "21", value: "95", info: "[WARN]", status: "Battery dropping" },
            { time: "22", value: "94", info: "[WARN]", status: "Battery dropping" }
        ]
    },
    {
        node_type: "sensor", node_name: "Gallery", node_id: 104, deck:3, comp:3 , alertlogstemp: [
            { time: "1700 hrs", message: "Temperature rise detected" },
            { time: "1800 hrs", message: "Temperature above critical" },
            { time: "1600 hrs", message: "Smoke detected" },
            { time: "2000 hrs", message: "Fire detected" },
            { time: "2100 hrs", message: "Fire extinguishing started" },
            { time: "2200 hrs", message: "Temperature reducing" }
        ], alertlogsbattery: [
            { time: "1600 hrs", message: "Battery level at 50%" },
            { time: "1700 hrs", message: "Battery level at 43%" },
            { time: "1800 hrs", message: "Battery level at 33%" },
            { time: "1900 hrs", message: "Battery level at 30% — warning: battery low" },
            { time: "2000 hrs", message: "Battery level at 20% — critical battery level" },
            { time: "2100 hrs", message: "Battery level at 15% — urgent replacement required" },
            { time: "2200 hrs", message: "Battery level at 15% — urgent replacement required"  }
        ], temperature: [
            { time: "11", value: "50", info: "[INFO]", status: "Sensor initialized" },
            { time: "12", value: "48", info: "[INFO]", status: "Sensor working fine" },
            { time: "13", value: "45", info: "[INFO]", status: "Sensor working fine" },
            { time: "14", value: "50", info: "[INFO]", status: "Sensor working fine" },
            { time: "15", value: "48", info: "[INFO]", status: "Sensor working fine" },
            { time: "16", value: "54", info: "[INFO]", status: "Temperature rising above critical" },
            { time: "17", value: "55", info: "[INFO]", status: "Temperature rising above critical" },
            { time: "18", value: "58", info: "[INFO]", status: "Temperature rising above critical" },
            { time: "19", value: "60", info: "[INFO]", status: "Temperature rising above critical" },
            { time: "20", value: "60", info: "[INFO]", status: "Temperature rising above critical" },
            { time: "21", value: "65", info: "[INFO]", status: "Temperature rising above critical" },
            { time: "22", value: "75", info: "[INFO]", status: "Temperature rising above critical" }
        ], battery_percentage: [{ time: "11", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "12", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "13", value: "94", info: "[WARN]", status: "Battery dropping" },
            { time: "14", value: "88", info: "[WARN]", status: "Battery dropping" },
            { time: "15", value: "80", info: "[WARN]", status: "Battery dropping" },
            { time: "16", value: "75", info: "[WARN]", status: "Battery dropping" },
            { time: "17", value: "65", info: "[WARN]", status: "Battery dropping" },
            { time: "18", value: "60", info: "[WARN]", status: "Battery dropping" },
            { time: "19", value: "55", info: "[WARN]", status: "Battery dropping" },
            { time: "20", value: "42", info: "[WARN]", status: "Battery dropping" },
            { time: "21", value: "35", info: "[WARN]", status: "Battery dropping" },
            { time: "22", value: "20", info: "[WARN]", status: "Battery dropping" }]
    },
    {
        node_type: "suppression unit", node_name: "SS Dining Hall", node_id: 105, deck:3, comp: 7, alertlogstemp: null, alertlogsbattery: [], temperature: null, battery_percentage: [{ time: "11", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "12", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "13", value: "99", info: "[INFO]", status: "Battery dropping" },
            { time: "14", value: "99", info: "[INFO]", status: "Battery dropping" },
            { time: "15", value: "96", info: "[INFO]", status: "Battery dropping" },
            { time: "16", value: "96", info: "[INFO]", status: "Battery dropping" },
            { time: "17", value: "96", info: "[INFO]", status: "Battery dropping" },
            { time: "18", value: "96", info: "[INFO]", status: "Battery dropping" },
            { time: "19", value: "96", info: "[INFO]", status: "Battery dropping" },
            { time: "20", value: "95", info: "[INFO]", status: "Battery dropping" },
            { time: "21", value: "95", info: "[INFO]", status: "Battery dropping" },
            { time: "22", value: "94", info: "[INFO]", status: "Battery dropping" }]
    },
    {
        node_type: "sensor", node_name: "VS Dining Hall", node_id: 106, deck:5, comp: 5,  alertlogstemp: [
            { time: "1300 hrs", message: "Temperature rise detected" },
            { time: "1320 hrs", message: "Temperature above critical" },
            { time: "1430 hrs", message: "Fire detected" },
            { time: "1440 hrs", message: "Fire extinguishing started" },
            { time: "Currently", message: "Temperature reducing" }
        ], alertlogsbattery: [], temperature: [
            { info: "[INFO]", time: "11", status: "Sensor initialized", value: "50" },
            { info: "[INFO]", time: "12", status: "Normal operation", value: "50" },
            { info: "[INFO]", time: "13", status: "Normal operation", value: "49" },
            { info: "[INFO]", time: "14", status: "Normal operation", value: "49" },
            { info: "[INFO]", time: "15", status: "Normal operation", value: "48" },
            { info: "[INFO]", time: "16", status: "Normal operation", value: "50" },
            { info: "[WARNING]", time: "17", status: "Temperature rising. Possible fire risk.", value: "54" },
            { info: "[WARNING]", time: "18", status: "Temperature rising. Fire risk increased.", value: "58" },
            { info: "[ALERT]", time: "19", status: "High temperature detected! Fire may have occurred.", value: "65" },
            { info: "[ALERT]", time: "20", status: "Critical temperature! Fire confirmed. Immediate action required.", value: "80" },
            { info: "[INFO]", time: "21", status: "Fire extinguishing started", value: "70" },
            { info: "[INFO]", time: "22", status: "Temperature reducing", value: "55" }
        ], battery_percentage: [{ time: "11", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "12", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "13", value: "99", info: "[WARN]", status: "Battery dropping" },
            { time: "14", value: "99", info: "[WARN]", status: "Battery dropping" },
            { time: "15", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "16", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "17", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "18", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "19", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "20", value: "95", info: "[WARN]", status: "Battery dropping" },
            { time: "21", value: "95", info: "[WARN]", status: "Battery dropping" },
            { time: "22", value: "94", info: "[WARN]", status: "Battery dropping" }]
    },
    {
        node_type: "repeater", node_name: "Main Switch Board", node_id: 107, deck:4, comp: 6, alertlogstemp: null, alertlogsbattery: [], temperature: null, battery_percentage: [{ time: "11", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "12", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "13", value: "99", info: "[WARN]", status: "Battery dropping" },
            { time: "14", value: "99", info: "[WARN]", status: "Battery dropping" },
            { time: "15", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "16", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "17", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "18", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "19", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "20", value: "95", info: "[WARN]", status: "Battery dropping" },
            { time: "21", value: "95", info: "[WARN]", status: "Battery dropping" },
            { time: "22", value: "94", info: "[WARN]", status: "Battery dropping" }]
    },
    {
        node_type: "sensor", node_name: "MCO", node_id: 108, deck: 1, comp: 9, alertlogstemp: [
            { time: "1300 hrs", message: "Temperature rise detected" },
            { time: "1320 hrs", message: "Smoke detected" },
            { time: "1430 hrs", message: "Steady rise in temperature for past 1 hour" },
            { time: "1440 hrs", message: "Temperature above critical" },
        ], alertlogsbattery: [], temperature: [
            { time: "11", value: "50", info: "[INFO]", status: "Sensor initialized" },
            { time: "12", value: "49", info: "[INFO]", status: "Sensor working fine" },
            { time: "13", value: "53", info: "[INFO]", status: "Sensor working fine" },
            { time: "14", value: "50", info: "[INFO]", status: "Sensor working fine" },
            { time: "15", value: "50", info: "[INFO]", status: "Sensor working fine" },
            { time: "16", value: "48", info: "[INFO]", status: "Sensor working fine" },
            { time: "17", value: "52", info: "[INFO]", status: "Temperature rising above critical" },
            { time: "18", value: "56", info: "[INFO]", status: "Temperature rising above critical" },
            { time: "19", value: "59", info: "[INFO]", status: "Temperature rising above critical" },
            { time: "20", value: "60", info: "[INFO]", status: "Temperature rising above critical" },
            { time: "21", value: "62", info: "[INFO]", status: "Temperature rising above critical" },
            { time: "22", value: "65", info: "[INFO]", status: "Temperature rising above critical" }
        ], battery_percentage: [{ time: "11", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "12", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "13", value: "99", info: "[WARN]", status: "Battery dropping" },
            { time: "14", value: "99", info: "[WARN]", status: "Battery dropping" },
            { time: "15", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "16", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "17", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "18", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "19", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "20", value: "95", info: "[WARN]", status: "Battery dropping" },
            { time: "21", value: "95", info: "[WARN]", status: "Battery dropping" },
            { time: "22", value: "94", info: "[WARN]", status: "Battery dropping" }]
    },
    {
        node_type: "sensor", node_name: "Engg JS Mess", node_id: 109, deck: 6, comp: 2, alertlogstemp: null, alertlogsbattery: [], temperature: [
            { time: "11", value: "47" },
            { time: "12", value: "46" },
            { time: "13", value: "45" },
            { time: "14", value: "47" },
            { time: "15", value: "48" },
            { time: "16", value: "47" },
            { time: "17", value: "46" },
            { time: "18", value: "47" },
            { time: "19", value: "48" },
            { time: "20", value: "47" },
            { time: "21", value: "46" },
            { time: "22", value: "47" }
        ], battery_percentage: [{ time: "11", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "12", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "13", value: "99", info: "[WARN]", status: "Battery dropping" },
            { time: "14", value: "99", info: "[WARN]", status: "Battery dropping" },
            { time: "15", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "16", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "17", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "18", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "19", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "20", value: "95", info: "[WARN]", status: "Battery dropping" },
            { time: "21", value: "95", info: "[WARN]", status: "Battery dropping" },
            { time: "22", value: "94", info: "[WARN]", status: "Battery dropping" }]
    },
    {
        node_type: "suppression unit", node_name: "Engg SS Mess", node_id: 110, deck: 1, comp: 1, alertlogstemp: null, alertlogsbattery: [
            { time: "1800 hrs", message: "Battery level at 58%" },
            { time: "1900 hrs", message: "Battery level at 46%" },
            { time: "2020 hrs", message: "Battery level at 38%" },
            { time: "2100 hrs", message: "Battery level at 30% — warning: battery low" },
            { time: "2200 hrs", message: "Battery level at 20% — critical battery level" },
        ], temperature: null, battery_percentage: [{ time: "11", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "12", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "13", value: "99", info: "[WARN]", status: "Battery dropping" },
            { time: "14", value: "94", info: "[WARN]", status: "Battery dropping" },
            { time: "15", value: "86", info: "[WARN]", status: "Battery dropping" },
            { time: "16", value: "74", info: "[WARN]", status: "Battery dropping" },
            { time: "17", value: "66", info: "[WARN]", status: "Battery dropping" },
            { time: "18", value: "58", info: "[WARN]", status: "Battery dropping" },
            { time: "19", value: "46", info: "[WARN]", status: "Battery dropping" },
            { time: "20", value: "38", info: "[WARN]", status: "Battery dropping" },
            { time: "21", value: "30", info: "[WARN]", status: "Battery dropping" },
            { time: "22", value: "20", info: "[WARN]", status: "Needs Replacement" }]
    },
    {
        node_type: "sensor", node_name: "Spare Gear Store", node_id: 111, deck:4, comp: 5, alertlogstemp: [
            { time: "1700 hrs", message: "Temperature rise detected" },
            { time: "1800 hrs", message: "Temperature above critical" },
            { time: "1600 hrs", message: "Smoke detected" },
            { time: "2000 hrs", message: "Fire detected" },
            { time: "2100 hrs", message: "Fire extinguishing started" },
            { time: "2200 hrs", message: "Temperature reducing" }
        ], alertlogsbattery: [
            { time: "1600 hrs", message: "Battery level at 50%" },
            { time: "1700 hrs", message: "Battery level at 43%" },
            { time: "1800 hrs", message: "Battery level at 33%" },
            { time: "1900 hrs", message: "Battery level at 30% — warning: battery low" },
            { time: "2000 hrs", message: "Battery level at 20% — critical battery level" },
            { time: "2100 hrs", message: "Battery level at 15% — urgent replacement required" },
            { time: "2200 hrs", message: "Battery level at 15% — urgent replacement required"  }
        ], temperature: [
            { info: "[INFO]", time: "11", status: "Sensor initialized", value: "50" },
            { info: "[INFO]", time: "12", status: "Normal operation", value: "50" },
            { info: "[INFO]", time: "13", status: "Normal operation", value: "49" },
            { info: "[INFO]", time: "14", status: "Normal operation", value: "49" },
            { info: "[INFO]", time: "15", status: "Normal operation", value: "48" },
            { info: "[INFO]", time: "16", status: "Normal operation", value: "50" },
            { info: "[WARNING]", time: "17", status: "Temperature rising. Possible fire risk.", value: "54" },
            { info: "[WARNING]", time: "18", status: "Temperature rising. Fire risk increased.", value: "58" },
            { info: "[ALERT]", time: "19", status: "High temperature detected! Fire may have occurred.", value: "60" },
            { info: "[ALERT]", time: "20", status: "Critical temperature! Fire confirmed. Immediate action required.", value: "80" },
            { info: "[INFO]", time: "21", status: "Fire extinguishing started", value: "70" },
            { info: "[INFO]", time: "22", status: "Temperature reducing", value: "55" }
        ], battery_percentage: [  { time: "11", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "12", value: "94", info: "[INFO]", status: "Battery OK" },
            { time: "13", value: "86", info: "[WARN]", status: "Battery dropping" },
            { time: "14", value: "77", info: "[WARN]", status: "Battery dropping" },
            { time: "15", value: "64", info: "[WARN]", status: "Battery dropping" },
            { time: "16", value: "50", info: "[WARN]", status: "Battery dropping" },
            { time: "17", value: "42", info: "[WARN]", status: "Battery dropping" },
            { time: "18", value: "33", info: "[WARN]", status: "Battery dropping" },
            { time: "19", value: "30", info: "[WARN]", status: "Needs Replacement" },
            { time: "20", value: "20", info: "[WARN]", status: "Needs Replacement" },
            { time: "21", value: "15", info: "[WARN]", status: "Needs Replacement" },
            { time: "22", value: "15", info: "[WARN]", status: "Needs Replacement" }]
    },
    {
        node_type: "repeater", node_name: "CMR", node_id: 112, deck: 6, comp: 2, alertlogstemp: null, alertlogsbattery: [], temperature: null, battery_percentage: [{ time: "11", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "12", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "13", value: "99", info: "[WARN]", status: "Battery dropping" },
            { time: "14", value: "99", info: "[WARN]", status: "Battery dropping" },
            { time: "15", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "16", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "17", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "18", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "19", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "20", value: "95", info: "[WARN]", status: "Battery dropping" },
            { time: "21", value: "95", info: "[WARN]", status: "Battery dropping" },
            { time: "22", value: "94", info: "[WARN]", status: "Battery dropping" }]
    },
    {
        node_type: "suppression unit", node_name: "AC Compartment", node_id: 113, deck: 4, comp: 5, alertlogstemp: null, alertlogsbattery: [], temperature: null, battery_percentage: [{ time: "11", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "12", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "13", value: "99", info: "[WARN]", status: "Battery dropping" },
            { time: "14", value: "99", info: "[WARN]", status: "Battery dropping" },
            { time: "15", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "16", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "17", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "18", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "19", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "20", value: "95", info: "[WARN]", status: "Battery dropping" },
            { time: "21", value: "95", info: "[WARN]", status: "Battery dropping" },
            { time: "22", value: "94", info: "[WARN]", status: "Battery dropping" }]
    },
    {
        node_type: "sensor", node_name: "ASP", node_id: 114, deck:5, comp: 2,  alertlogstemp: [
            { time: "1300 hrs", message: "Temperature rise detected" },
            { time: "1320 hrs", message: "Temperature above critical" },
            { time: "1400 hrs", message: "Smoke detected" },
            { time: "1430 hrs", message: "Fire detected" },
            { time: "1440 hrs", message: "Fire extinguishing started" },
            { time: "Currently", message: "Temperature reducing" }
        ], alertlogsbattery: [], temperature: [
            { time: "11", value: "50", info: "[INFO]", status: "Sensor initialized" },
            { time: "12", value: "48", info: "[INFO]", status: "Sensor working fine" },
            { time: "13", value: "40", info: "[INFO]", status: "Sensor working fine" },
            { time: "14", value: "52", info: "[INFO]", status: "Sensor working fine" },
            { time: "15", value: "56", info: "[INFO]", status: "Sensor working fine" },
            { time: "16", value: "60", info: "[INFO]", status: "Temperature rising above critical" },
            { time: "17", value: "65", info: "[INFO]", status: "Temperature rising above critical" },
            { time: "18", value: "66", info: "[INFO]", status: "Temperature rising above critical" },
            { time: "19", value: "70", info: "[INFO]", status: "Temperature rising above critical" },
            { time: "20", value: "75", info: "[INFO]", status: "Fire"},
            { time: "21", value: "70", info: "[INFO]", status: "Fire extinguishing started" },
            { time: "22", value: "60", info: "[INFO]", status: "Temperature reducing" }
        ], battery_percentage: [ { time: "11", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "12", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "13", value: "99", info: "[WARN]", status: "Battery dropping" },
            { time: "14", value: "99", info: "[WARN]", status: "Battery dropping" },
            { time: "15", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "16", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "17", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "18", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "19", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "20", value: "95", info: "[WARN]", status: "Battery dropping" },
            { time: "21", value: "95", info: "[WARN]", status: "Battery dropping" },
            { time: "22", value: "94", info: "[WARN]", status: "Battery dropping" }]
    },
    {
        node_type: "repeater", node_name: "Pump Room", node_id: 115, deck:3, comp: 3, alertlogstemp: null, alertlogsbattery: [], temperature: null, battery_percentage: [ { time: "11", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "12", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "13", value: "99", info: "[WARN]", status: "Battery dropping" },
            { time: "14", value: "99", info: "[WARN]", status: "Battery dropping" },
            { time: "15", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "16", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "17", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "18", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "19", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "20", value: "95", info: "[WARN]", status: "Battery dropping" },
            { time: "21", value: "95", info: "[WARN]", status: "Battery dropping" },
            { time: "22", value: "94", info: "[WARN]", status: "Battery dropping" }]
    },
    {
        node_type: "repeater", node_name: "Cabin Flat", node_id: 116, deck:1, comp: 8, alertlogstemp: null, alertlogsbattery: [], temperature: null, battery_percentage: [ { time: "11", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "11", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "12", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "13", value: "99", info: "[INFO]", status: "Battery dropping" },
            { time: "14", value: "99", info: "[INFO]", status: "Battery dropping" },
            { time: "15", value: "96", info: "[INFO]", status: "Battery dropping" },
            { time: "16", value: "96", info: "[INFO]", status: "Battery dropping" },
            { time: "17", value: "96", info: "[INFO]", status: "Battery dropping" },
            { time: "18", value: "96", info: "[INFO]", status: "Battery dropping" },
            { time: "19", value: "96", info: "[INFO]", status: "Battery dropping" },
            { time: "20", value: "95", info: "[INFO]", status: "Battery dropping" },
            { time: "21", value: "95", info: "[INFO]", status: "Battery dropping" },
            { time: "22", value: "94", info: "[INFO]", status: "Battery dropping" }]
    },
    {
        node_type: "suppression unit", node_name: "Fwd JS Mess", node_id: 117, deck: 6, comp: 9, alertlogstemp: null, alertlogsbattery: [], temperature: null, battery_percentage: [ { time: "11", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "12", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "13", value: "99", info: "[WARN]", status: "Battery dropping" },
            { time: "14", value: "99", info: "[WARN]", status: "Battery dropping" },
            { time: "15", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "16", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "17", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "18", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "19", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "20", value: "95", info: "[WARN]", status: "Battery dropping" },
            { time: "21", value: "95", info: "[WARN]", status: "Battery dropping" },
            { time: "22", value: "94", info: "[WARN]", status: "Battery dropping" }]
    },
    {
        node_type: "sensor", node_name: "Fwd SS Mess", node_id: 118, deck:5, comp: 11,   alertlogstemp: [
            { time: "1800 hrs", message: "Smoke detected" }
        ], alertlogsbattery: [], temperature: [
            { time: "11", value: "50", info: "[INFO]", status: "Sensor initialized" },
            { time: "12", value: "49", info: "[INFO]", status: "Sensor working fine" },
            { time: "13", value: "48", info: "[INFO]", status: "Sensor working fine" },
            { time: "14", value: "50", info: "[INFO]", status: "Sensor working fine" },
            { time: "15", value: "50", info: "[INFO]", status: "Sensor working fine" },
            { time: "16", value: "50", info: "[INFO]", status: "Sensor working fine" },
            { time: "17", value: "50", info: "[INFO]", status: "Sensor working fine" },
            { time: "18", value: "48", info: "[INFO]", status: "Sensor working fine" },
            { time: "19", value: "49", info: "[INFO]", status: "Sensor working fine" },
            { time: "20", value: "50", info: "[INFO]", status: "Sensor working fine" },
            { time: "21", value: "50", info: "[INFO]", status: "Sensor working fine" },
            { time: "22", value: "50", info: "[INFO]", status: "Sensor working fine" }
        ], battery_percentage: [
            { time: "11", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "12", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "13", value: "99", info: "[WARN]", status: "Battery dropping" },
            { time: "14", value: "99", info: "[WARN]", status: "Battery dropping" },
            { time: "15", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "16", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "17", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "18", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "19", value: "96", info: "[WARN]", status: "Battery dropping" },
            { time: "20", value: "95", info: "[WARN]", status: "Battery dropping" },
            { time: "21", value: "95", info: "[WARN]", status: "Battery dropping" },
            { time: "22", value: "94", info: "[WARN]", status: "Battery dropping" }
        ]
    },
    {
        node_type: "repeater", node_name: "compartment 0", node_id: 119, deck:5, comp: 8, alertlogstemp: null, alertlogsbattery: [], temperature: null, battery_percentage: [ { time: "11", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "11", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "12", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "13", value: "99", info: "[INFO]", status: "Battery dropping" },
            { time: "14", value: "99", info: "[INFO]", status: "Battery dropping" },
            { time: "15", value: "98", info: "[INFO]", status: "Battery dropping" },
            { time: "16", value: "97", info: "[INFO]", status: "Battery dropping" },
            { time: "17", value: "96", info: "[INFO]", status: "Battery dropping" },
            { time: "18", value: "96", info: "[INFO]", status: "Battery dropping" },
            { time: "19", value: "95", info: "[INFO]", status: "Battery dropping" },
            { time: "20", value: "94", info: "[INFO]", status: "Battery dropping" },
            { time: "21", value: "91", info: "[INFO]", status: "Battery dropping" },
            { time: "22", value: "90", info: "[INFO]", status: "Battery dropping" }]
    },
    {
        node_type: "suppression unit", node_name: "comp 1", node_id: 120, deck:5, comp: 5, alertlogstemp: null, alertlogsbattery: [], temperature: null, battery_percentage: [{ time: "11", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "12", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "13", value: "99", info: "[INFO]", status: "Battery dropping" },
            { time: "14", value: "99", info: "[INFO]", status: "Battery dropping" },
            { time: "15", value: "97", info: "[INFO]", status: "Battery dropping" },
            { time: "16", value: "96", info: "[INFO]", status: "Battery dropping" },
            { time: "17", value: "96", info: "[INFO]", status: "Battery dropping" },
            { time: "18", value: "95", info: "[INFO]", status: "Battery dropping" },
            { time: "19", value: "95", info: "[INFO]", status: "Battery dropping" },
            { time: "20", value: "94", info: "[INFO]", status: "Battery dropping" },
            { time: "21", value: "92", info: "[INFO]", status: "Battery dropping" },
            { time: "22", value: "90", info: "[INFO]", status: "Battery dropping" }]
    },
    {
        node_type: "suppression unit", node_name: "comp 2", node_id: 121, deck:5, comp: 2, alertlogstemp: null, alertlogsbattery: [], temperature: null, battery_percentage: [{ time: "11", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "12", value: "100", info: "[INFO]", status: "Battery OK" },
            { time: "13", value: "99", info: "[INFO]", status: "Battery dropping" },
            { time: "14", value: "99", info: "[INFO]", status: "Battery dropping" },
            { time: "15", value: "97", info: "[INFO]", status: "Battery dropping" },
            { time: "16", value: "96", info: "[INFO]", status: "Battery dropping" },
            { time: "17", value: "96", info: "[INFO]", status: "Battery dropping" },
            { time: "18", value: "95", info: "[INFO]", status: "Battery dropping" },
            { time: "19", value: "95", info: "[INFO]", status: "Battery dropping" },
            { time: "20", value: "94", info: "[INFO]", status: "Battery dropping" },
            { time: "21", value: "92", info: "[INFO]", status: "Battery dropping" },
            { time: "22", value: "90", info: "[INFO]", status: "Battery dropping" }]
    },
];

export const alertLogs = [
    { info: "[INFO]", time: "11:00 am", status: "Sensor initialized", temperature: "50" },
    { info: "[INFO]", time: "12:00 pm", status: "Normal operation", temperature: "50" },
    { info: "[INFO]", time: "13:00 pm", status: "Normal operation", temperature: "49" },
    { info: "[INFO]", time: "14:00 pm", status: "Normal operation", temperature: "49" },
    { info: "[INFO]", time: "15:00 pm", status: "Normal operation", temperature: "48" },
    { info: "[INFO]", time: "16:00 pm", status: "Normal operation", temperature: "50" },
    { info: "[WARNING]", time: "17:00 pm", status: "Temperature rising. Possible fire risk.", temperature: "54" },
    { info: "[WARNING]", time: "18:00 pm", status: "Temperature rising. Fire risk increased.", temperature: "58" },
    { info: "[ALERT]", time: "19:00 pm", status: "High temperature detected! Fire may have occurred.", temperature: "60" },
    { info: "[ALERT]", time: "20:00 pm", status: "Critical temperature! Fire confirmed. Immediate action required.", temperature: "68" },
    { info: "[ALERT]", time: "21:00 pm", status: "Critical temperature! Emergency response needed.", temperature: "74" },
    { info: "[ALERT]", time: "22:00 pm", status: "System at maximum alert.", temperature: "80" }
]