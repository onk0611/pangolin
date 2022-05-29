// get Database
const db = require('../config/db');

// import libraries and dependencies
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const res = require('express/lib/response');
const app = express();

// get env variables
const url = process.env.HOST_NAME;
const port = process.env.HOST_PORT;
const databaseName = process.env.DB_NAME;

// set variables
let angularPort = 4200;
let a = '/--------------------------------------/';

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// test frontend
app.get('/', (req, res) => {
    res.send('server running <a href="http://' + url + ':' + port + '/">HERE</a>');
})

app.get('/api', (req, res) => {
    console.log('request send from front');
    res.json({msg: 'request send from back'})
})

// console log with server status, dns & port for express & angular server
app.listen(port , () => {
    console.log('\x1b[36m%s\x1b[0m', a + '\n/ Express link : http://' + url + ':' + port + ' /\n/ Angular link : http://' + url + ':' + angularPort + ' /\n' + a);
})

