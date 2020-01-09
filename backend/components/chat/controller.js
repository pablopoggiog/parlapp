const store = require('./store');

const addChat = (users) => {
    if (!users) {
        return Promise.reject('Invalid chat');
    }
    const chat = {
        users
    }
    return store.add(chat);
}

const getChats = async filterChats => {
    const lista = await store.list(filterChats);
    return lista;
};



module.exports = {
    addChat,
    getChats,
}