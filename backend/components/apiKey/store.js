const ApiKey = require('./model');

const addApiKey = async ApiKey => {
    const myApiKey = await new ApiKey(ApiKey);
    return await myApiKey.save();
}

const getApiKeys = filterApiKey => {
    return new Promise((resolve, reject) => {       
        let filter = {};
        if (filterApiKey !== null) {
            filter = {users: filterApiKey}
        }
        ApiKey.find(filter)
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
    add: addApiKey,
    list: getApiKeys
}
