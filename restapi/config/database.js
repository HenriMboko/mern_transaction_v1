const mongoose = require('mongoose');
const config = require('./config');

const db_url = config.mongo_url;

const db_Connect = mongoose.connect(db_url);

db_Connect.then((db) => {
    console.log("Connection with database successfuly......");
}, (err) => console.log(err)).catch((err) => console.log(err))