const express = require('express');
const app = express();
const server = require('http').Server(app);

require('./db');

const bodyParser = require('body-parser');
const socket = require('./socket');
const cors = require('cors');
const morgan =  require('morgan');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(morgan('dev'));
app.use(cors());

const routes = require('./network/routes');

socket.connect(server);
routes(app);

app.use('/app', express.static('public'));

const PORT = 2020;
server.listen(PORT, () => {
    console.log('server escuchando en el puerto ' + PORT);
})