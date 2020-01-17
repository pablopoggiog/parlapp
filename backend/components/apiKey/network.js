const express = require('express');
const apiKeyRouter = express.Router();
const boom = require('@hapi/boom');
const passport = require('passport');
const jwt = require('jsonwebtoken');

//Basic strategy
require('../../auth/strategies/basic');

const response = require('../../network/response.js');
const controller = require('./controller');

apiKeyRouter.get('/', async (req, res) => {
    const filterToken = req.query.users || null;
    try {
        const apiKeyList = await controller.getapiKeys(filterToken);
        await response.success(req, res, apiKeyList, 200);
    }
    catch(e) {
        response.error(req, res, 'Error inesperated', 500, e)
    }
})

apiKeyRouter.post('/sign-in', async (req, res, next) => {
    const apiKeyToken = req.headers['auth'];
    console.log(`El apiKeyToken es igual a ${apiKeyToken}`);
    if(!apiKeyToken) {
        next(boom.unauthorized('apiKeyToken is necesario, ah re spanglish'))
    }

    passport.authenticate('basic', function(error, user) {
        try {
            if (error || !user) {
                next(boom.unauthorized(error));
            }

            req.login(user, {session: false}, async function(error) {
                if (error) {
                    next(error)
                }

                const apiKey = await controller.getApiKey(apiKeyToken);

                if (!apiKey) {
                    next(boom.unauthorized());
                }

                const { _id: id, name, email } = user;
                const payload = {
                    sub: id, 
                    name, 
                    email, 
                    scopes: apiKey.scopes
                }

                const token = jwt.sign(payload, 'secret', {
                    expiresIn: '15m'
                });
                
                return await response.success(req, res, { token, user: { id, name, email } }, 200);
            })
        } catch(error) {
            next(error);
        }
    })(req, res, next);
})

module.exports = apiKeyRouter;