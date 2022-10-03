const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new Schema({
    amount: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    }

}, { timestamps: true })

userSchema.plugin(passportLocalMongoose);

//compile userSchema to model

const Users = mongoose.model('users', userSchema);

module.exports = Users;