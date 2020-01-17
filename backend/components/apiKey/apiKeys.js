const mongo = require('mongodb');

class ApiKeysService {
    constructor() {
        this.collection = 'api-keys',
        this.mongoDB = new mongo();
    }

    async getApiKey({token}) {
        const [apiKey] = await this.mongoDB.getAll(this.collection, {token});
        return apiKey;
    }
}


module.exports = ApiKeysService;