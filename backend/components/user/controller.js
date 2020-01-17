const store = require('./store');
const bcrypt = require('bcrypt');

const addUser = async (name, imgSrc, creationDate, mail, password) => {
    if (!name) {
        return Promise.reject('Invalid user');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
        name,
        imgSrc,
        creationDate,
        mail,
        password: await hashedPassword
    }
    return store.add(user);
}

const getUsers = async filterUser => {
    const lista = await store.list(filterUser);
    return lista;
};

const updateUser = async (id, name, imgSrc, mail) => {
    if (!id) {
        console.error('Falta indicar id de usuario a modificar');
        return
    }
    if (!name && !imgSrc && !mail) {
        console.error('Invalid data');
        return
    }
    const updateado = await store.update(id, name, imgSrc, mail);
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