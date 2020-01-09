const Model = require('./model');

const addChat = async chat => {
    const myChat = await new Model(chat);
    return await myChat.save();
}

const getChats = filterChats => {
    return new Promise((resolve, reject) => {       
        let filter = {};
        if (filterChats !== null) {
            filter = {users: filterChats}
        }
        Model.find(filter)
            .populate('users')
            .exec((error, populated) => {
                if (error) {
                    reject(error);
                    return false;
                }
                resolve(populated)
            })

    })
}


module.exports = {
    add: addChat,
    list: getChats
}
