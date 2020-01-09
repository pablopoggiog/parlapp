const {Schema, model} = require('mongoose');

const mySchema = new Schema({
    users: [{
        type: Schema.ObjectId,
        ref: 'user'
    }]
});

const Model = new model('chat', mySchema);
module.exports = Model;