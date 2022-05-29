const mongoose = require('mongoose');
const env = process.env;
let a = '/--------------------------------------/';

const uri = "mongodb+srv://" + 
    env.DB_USER + ":" + 
    env.DB_PASSWORD +"@" + 
    env.DB_CLUSTER_NAME +".dy2pg.mongodb.net/" + 
    env.DB_NAME + "?retryWrites=true&w=majority"
;

const connection = mongoose.connect(uri, 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log('Connection to mongodb failed :' + JSON.stringify(err, undefined, 2));
            console.log(err);
            return
        } 
        // Successfully
        console.log('\x1b[35m%s\x1b[0m', '/             Successfully             / \n' + a);
    }
);

console.log('\x1b[35m%s\x1b[0m', '\n \n' + a +'\n/           connection db.js           /');
console.log(connection);