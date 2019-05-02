const deviceDb = require('../model/devices');
const deviceService = {}

deviceService.addDevice = (device) => {
    return deviceDb.addDevice(device).then(addDeviceData => {
        if (addDeviceData) return addDeviceData;
        else {
            let err = new Error("Could not add device");
            err.status = 500;
            throw err;
        }
    })
}

deviceService.deleteDevice = (deviceId) => {
    return deviceDb.deleteDevice(deviceId).then(deleteDeviceData => {
        if (deleteDeviceData) return deleteDeviceData;
        else {
            let err = new Error("Could not delete device");
            err.status = 500;
            throw err;
        }
    });
}

deviceService.viewDevice = () => {
    return deviceDb.viewDevice().then(viewDeviceData => {
        if (viewDeviceData) return viewDeviceData;
        else {
            let err = new Error("Could not get device details");
            err.status = 500;
            throw err;
        }
    });
}

deviceService.updateDevice = (device) => {
    return deviceDb.updateDevice(device).then(updateDeviceData => {
        if (updateDeviceData) return updateDeviceData;
        else {
            let err = new Error("Could not update device");
            err.status = 500;
            throw err;
        }
    })
}

module.exports = deviceService;