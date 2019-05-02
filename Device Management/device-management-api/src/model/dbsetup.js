const collection = require('../utilities/deviceConnection');

deviceData = [
    {
        deviceId: "1001",
        name: "Samsung",
        allocatedTo: "John"
    },
    {
        deviceId: "1002",
        name: "Honor",
        allocatedTo: "Karthik"
    },
    {
        deviceId: "1003",
        name: "Moto",
        allocatedTo: "Doe"
    },
    {
        deviceId: "1004",
        name: "Mi",
        allocatedTo: "charan"
    },
    {
        deviceId: "1005",
        name: "Vivo",
        allocatedTo: "kalyan"
    }
]

exports.setupDb = () => {
    return collection.getdeviceCollection().then((myCollection) => {
        return myCollection.deleteMany().then(data => {
            return myCollection.insertMany(deviceData).then(data => {
                if (data) {
                    return "Insertion Successfull"
                } else {
                    throw new Error("Insertion failed")
                }
            })
        })

    })
}