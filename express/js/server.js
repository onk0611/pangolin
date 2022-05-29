// get Database
require('../db/mongoose')

// import libraries and dependencies
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// get env variables
const url = process.env.HOST_NAME;
const port = process.env.HOST_PORT;
var angularPort = 4200;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// test frontend
app.get('/', (req, res) => {
    res.send('http://' + dns + ':' + port + '/');
})

// console log with server status, dns & port for express & angular server
app.listen(port , () => {
    console.log('Server status : start & operationnal \n dns : ' + url + '\n port : ' + port + '\n url : http://' + url + ':' + port + '\n Angular : http://' + url + ':' + angularPort);
})

