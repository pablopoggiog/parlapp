const express = require('express');
const chatRouter = express.Router();

const response = require('../../network/response.js');
const controller = require('./controller');

chatRouter.get('/', async (req, res) => {
    const filterChats = req.query.users || null;
    try {
        const chatList = await controller.getChats(filterChats);
        await response.success(req, res, chatList, 200);
    }
    catch(e) {
        response.error(req, res, 'Error inesperated', 500, e)
    }
})

chatRouter.post('/', async (req, res) => {
    try {
        const data = await controller.addChat(req.body.users)
        await response.success(req, res, data, 201);
    }
    catch(e) {
            response.error(req, res, 'Info invalida', 400, e);
        }
})

module.exports = chatRouter;