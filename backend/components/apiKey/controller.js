const store = require('./store');

const addApiKey = (filterToken) => {
    if (!filterToken) {
        return Promise.reject('Invalid ApiKey');
    }
    const ApiKey = {
        filterToken
    }
    return store.add(ApiKey);
}

const getApiKey = async filterApiKey => {
    const lista = await store.list(filterApiKey);
    return lista;
};



module.exports = {
    addApiKey,
    getApiKey,
}