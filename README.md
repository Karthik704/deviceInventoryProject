# deviceInventory Project using MEAN Stack
Prerequisites:

Html,CSS,Bootstrap,Angular 7,Node Js,Express Js,MongoDb.

Installing:

Install Visual Studio Code IDE for writing code.Install Azure Cosmos DB from Vs Code Extenstions Market Place.

Description:

This is a MEAN Stack application that provides the main functions as Dashboard,View Devices,Update device,Delete devices in inventory which is based on Based basic CRUD operations.


Setup:

Clone this repo to your desktop and run npm install in both DeviceUI and Device-api folder to install all the dependencies.

You might want to look into config.json to make change the port you want to use.

Usage:

After you clone this repo to your desktop, go to its root directory and run npm install to install its dependencies.

Once the dependencies are installed, you can run "node app.js" to start the application at server-side. You will then be able to access it at localhost:3000.

To run Angular application at client-side ,go to device-management/src/app  and run npm install to install its dependencies.after successfull installation of node modules,

you can run "ng serve --open". You will then able to access it at localhost:4200 in browser.

-->open url "localhost:3000/SetupDb" in browser and it will create database and setup Db.

-->open url "localhost:4200" in browser and it will open dashboard of application that is Home page and url will be "localhost:4200/dashboard".

-->you will get options like view devices,update devices,add devices,delete devices.

Description:

With this application you can maintain inventory of devices.you can add the device with details like device Id,device Name,allocatedto.

you can delete the device in inventory using device and you can update details of device.

Commands Used:

"npm install" to install node modules in both server-side and client-side.

"node app.js" to run server-side application at "device-management-api/src".

"ng serve --open" to run client-side appplication at "device-management/src/app".







