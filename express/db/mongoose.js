const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/pangolin', {
    useNewUrlParser: true
}).then(() => {
    console.log('Connection established to database');
}).catch(error => {
    console.log('Error connecting to database : ', error);
})