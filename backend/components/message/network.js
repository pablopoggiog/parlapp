const express = require('express');
const messageRouter = express.Router();

const response = require('../../network/response.js');
const controller = require('./controller');

messageRouter.get('/', async (req, res) => {
    const filterMessages = req.query.user || null;
    try {
        const messageList = await controller.getMessages(filterMessages);
        await response.success(req, res, messageList, 200);
    }
    catch(e) {
        response.error(req, res, 'Error inesperated', 500, e)
    }
})

messageRouter.post('/', async (req, res) => {
    try {
        const fullMessage = await controller.addMessage(req.body.chat, req.body.user, req.body.message)
        await response.success(req, res, fullMessage, 201);
    }
    catch(e) {
            response.error(req, res, 'Info invalida', 400, e);
        }
})

messageRouter.patch('/:id', async (req, res) => {
    try {
        const data = await controller.updateMessage(req.params.id, req.body.message);
        await response.success(req, res, data, 200)
    }
    catch(e) {
        response.error(req, res, 'Error interno', 400, e);
    }
})

messageRouter.delete('/:id', async (req, res) => {
    try {
        const data = await controller.deleteMessage(req.params.id);
        await response.success(req, res, `Mensaje ${req.params.id} eliminado`, 200)
    }
    catch(e) {
        response.error(req, res, 'Error interno', 500, e);
    }
})


module.exports = messageRouter;