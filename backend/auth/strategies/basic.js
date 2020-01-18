const passport = require('passport');
const {BasicStrategy} = require('passport-http');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const controller = require('../../components/user/controller');

passport.use(new BasicStrategy(async function(email, password, cb) {
    
    try {
        console.log(`El email usado para filtrar es ${email}`)
        const user = await controller.getUsers(email);
        console.log(`El password usado para comparar es ${password}, contra ${user[0].password}`)
        console.log(`El usuario encontrado para contrastar es ${user}, y su password es ${user[0].password}`)

        if(!user) {
            console.log('no hay usuario')
            return cb(boom.unauthorized(), false);
        }

        if (await bcrypt.compare(password, user[0].password)) {
            delete user[0].password;
            return cb(null, user[0]);
        }

        return cb(boom.unauthorized(), false);
    } catch(e) {
        return cb('que haces putete');
    }
}))