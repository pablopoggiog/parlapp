const Model = require('./model');

const addMessage = async message => {
    const nuevo = await new Model(message);
    await nuevo.save()
}

const getMessages = filterUser => {
    return new Promise((resolve, reject) => {       
        let filter = {};
        if (filterUser !== null) {
            filter = {user: filterUser}
        }
        Model.find(filter)
            .populate('user')
            .exec((error, populated) => {
                if (error) {
                    reject(error);
                    return false;
                }
                resolve(populated)
            })

    })
}

const updateMessage = async (id, message) => {
    const foundMessage = await Model.findOne({
        _id: id
    });
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

const removeMessage = async id => {
    const borrado = await Model.deleteOne({
        _id: id
    });
    return borrado;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    // get
    update: updateMessage,
    remove: removeMessage
}