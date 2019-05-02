const express = require('express');
const deviceRouter = express.Router();
const deviceService = require('../service/devices');

//Add Device
deviceRouter.post('/add', (req, res, next) => {
    let device = req.body;
    return deviceService.addDevice(device).then((addData) => {
        res.json(addData);
    }).catch(err => next(err))
});

//View Device
deviceRouter.get('/view', (req, res, next) => {
    return deviceService.viewDevice().then((viewData) => {
        res.json(viewData);
    }).catch(err => next(err))
});

//Modify Device
deviceRouter.put('/update', function (req, res, next) {
    let device = req.body;
    return deviceService.updateDevice(device).then((updateData) => {
        res.json(updateData);
    }).catch(err => next(err))
});

//Delete Device
deviceRouter.delete('/delete', function (req, res, next) {
    let deviceId = req.query.deviceId;
    return deviceService.deleteDevice(deviceId).then((deleteData) => {
        res.json("Device Deleted Successfully!!")
    }).catch(err => {
        next(err)
    })
})

module.exports = deviceRouter;