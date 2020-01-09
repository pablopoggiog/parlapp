const {Schema, model} = require('mongoose');

const mySchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'chat'
    },
    user: {
        type: Schema.ObjectId,
        ref: 'user'
    },
    message: String,
    date: Date
});

const Model = new model('message', mySchema);
module.exports = Model;