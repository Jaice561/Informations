const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var informationSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    birthday: {
        type: Date,
        require: true
    },
    phoneNumber: {
        type: Number
    },
    email: {
        type: String
    },
    note: {
        type: String
    },
    // isAdmin: {
    //     type: Boolean,
    //     default: false
    // },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
});

module.exports = mongoose.model('Information', informationSchema);