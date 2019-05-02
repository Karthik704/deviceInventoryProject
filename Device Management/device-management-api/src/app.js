const express = require('express');
const app = express();
const requestLogger = require('./utilities/requestLogger');
const errorLogger = require('./utilities/errorLogger');
const deviceRouter = require('./routes/deviceRouting');
const createDb = require("./model/dbsetup");
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.use(requestLogger);
app.use('/device', deviceRouter);

app.use(errorLogger);


app.get('/setupDb', (req, res, next) => {
    createDb.setupDb().then((data) => {
        res.send(data)
    }).catch((err) => {
        next(err)
    })
})

app.listen(3000);
console.log("Server Started!!");