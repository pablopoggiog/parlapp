const {Schema, model} = require('mongoose');

const mySchema = new Schema({
    name: String,
    imgSrc: String,
    creationDate: Date
});

const Model = new model('user', mySchema);
module.exports = Model;