const express = require('express');
const userRouter = express.Router();

const response = require('../../network/response.js');
const controller = require('./controller');

userRouter.post('/', async (req, res) => {
    try {
        const user = await controller.addUser(req.body.name, req.body.imgSrc, new Date(), req.body.mail, req.body.password)
        await response.success(req, res, user, 201);
    }
    catch(e) {
            response.error(req, res, 'Info invalida', 400, e);
        }
})

userRouter.get('/', async (req, res) => {
    const filterUsers = req.query.mail || null;
    try {
        const usersList = await controller.getUsers(filterUsers);
        await response.success(req, res, usersList, 200);
    }
    catch(e) {
        response.error(req, res, 'Error inesperated', 500, 'queseya')
    }
})

userRouter.patch('/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        const data = await controller.updateUser(req.params.id, req.body.name, req.body.imgSrc, req.body.mail);
        await response.success(req, res, data, 200)
    }
    catch(e) {
        response.error(req, res, 'Error interno', 400, e);
    }
})

userRouter.delete('/:id', async (req, res) => {
    try {
        const data = await controller.deleteUser(req.params.id);
        await response.success(req, res, `Usuario ${req.params.id} eliminado`, 200)
    }
    catch(e) {
        response.error(req, res, 'Error interno', 500, e);
    }
})


module.exports = userRouter;