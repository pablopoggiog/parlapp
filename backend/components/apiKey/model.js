const {Schema, model} = require('mongoose');

const mySchema = new Schema({
    token: String,
    user: {
        type: Schema.ObjectId,
        ref: 'user'
    }
});

const ApiKey = new model('ApiKey', mySchema);
module.exports = ApiKey;