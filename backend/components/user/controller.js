const store = require('./store');

const addUser = (name, imgSrc, creationDate) => {
    if (!name) {
        return Promise.reject('Invalid user');
    }
    const user = {
        name,
        imgSrc,
        creationDate
    }
    return store.add(user);
}

const getUsers = async filterUser => {
    const lista = await store.list(filterUser);
    return lista;
};

const updateUser = async (id, name, imgSrc) => {
    if (!id) {
        console.error('Falta indicar id de usuario a modificar');
        return
    }
    if (!name && !imgSrc) {
        console.error('Invalid data');
        return
    }
    const updateado = await store.update(id, name, imgSrc);
    return updateado;
}

const deleteUser = async id => {
    if (!id) {
        console.error('ID invalido')
    }
        const borrado = await store.remove(id);
        return borrado;
}





module.exports = {
    addUser,
    getUsers,
    updateUser,
    deleteUser
}