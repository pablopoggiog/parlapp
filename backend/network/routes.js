const express = require('express');
const messageRouter = require('../components/message/network');
const userRouter = require('../components/user/network');
const chatRouter = require('../components/chat/network');
const apiKeyRouter = require('../components/apiKey/network');

const routes = server => {    
    server.use('/api/message', messageRouter);
    server.use('/api/user', userRouter);
    server.use('/api/chat', chatRouter);
    server.use('/api/auth', apiKeyRouter);
}

module.exports = routes;