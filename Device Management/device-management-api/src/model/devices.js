const deviceCollection = require('../utilities/deviceConnection');
const deviceDb = {}

// View Devices
deviceDb.viewDevice = () => {
    return deviceCollection.getdeviceCollection().then(model => {
        return model.find()
            .then(viewData => {
                if (viewData !== null) {
                    return viewData;
                } else return null;
            })
    })
}

// Delete Device
deviceDb.deleteDevice = (deviceId) => {
    return deviceCollection.getdeviceCollection().then(model => {
        return model.findOneAndDelete({ deviceId: deviceId }).then(deleteData => {
            if (deleteData !== null) {
                return deleteData;
            } else return null;
        })
    })
}

//Add Device
deviceDb.addDevice = (device) => {
    return deviceCollection.getdeviceCollection().then(model => {
        return model.create(device).then(addDeviceData => {
            if (addDeviceData !== null) {
                return addDeviceData;
            } else return null;
        })
    })
}

// Modify Device
deviceDb.updateDevice = (device) => {
    return deviceCollection.getdeviceCollection().then(model => {
        return model.findOneAndUpdate({ deviceId: device.deviceId }, { $set: { name: device.name, allocatedTo: device.allocatedTo } }).then(updateData => {
            if (updateData !== null) {
                return updateData;
            } else return null;
        })
    })
}

module.exports = deviceDb;
