const { Schema } = require("mongoose");
const Mongoose = require("mongoose")
Mongoose.Promise = global.Promise;
Mongoose.set('useCreateIndex', true)
const url = "mongodb://localhost:27017/Device_Management_DB";

const deviceSchema = Schema({
    deviceId: {
        type: String, unique: true
    },
    name: String,
    allocatedTo: String
}, { collection: "Devices", timestamps: true })

let deviceCollection = {};

deviceCollection.getdeviceCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
        return database.model('Devices', deviceSchema)
    }).catch((error) => {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}

module.exports = deviceCollection;
