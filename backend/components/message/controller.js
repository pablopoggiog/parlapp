const store = require('./store');
const {socket} = require('../../socket');

const addMessage = async (chat, user, message) => {
        if (!user || !message) {
            console.error('[messageController] No hay usuario o mensaje');
            return;
        }
        const fullMessage = {
            chat,
            user, 
            message,
            date: new Date()
        }
        await store.add(fullMessage);

        socket.io.emit('message', fullMessage);

        return fullMessage;
}

const getMessages = async filterUser => {
        const lista = await store.list(filterUser);
        return lista;
    };

const updateMessage = async (id, message) => {
    if (!id, !message) {
        console.error('Invalid data');
        return
    }
    const updateado = await store.update(id, message);
    return updateado;
}

const deleteMessage = async id => {
    if (!id) {
        console.error('ID invalido')
    }
        const borrado = await store.remove(id);
        return borrado;
}

module.exports = {
    addMessage,
    getMessages, 
    updateMessage,
    deleteMessage
}