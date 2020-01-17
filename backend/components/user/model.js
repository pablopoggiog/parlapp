const {Schema, model} = require('mongoose');

const mySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imgSrc: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Model = new model('user', mySchema);
module.exports = Model;