const passport = require('passport');
const {BasicStrategy} = require('passport-http');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const controller = require('../../components/user/controller');

passport.use(new BasicStrategy(async function(email, password, cb) {
    
    try {
        const user = await controller.getUsers(email);

        if(!user) {
            console.log('no hay usuario')
            return cb(boom.unauthorized(), false);
        }

        if (!(await bcrypt.compare(password, user.password))) {
            console.log('la password no coincide')
            return cb(boom.unauthorized(), false)
        }

        delete user.password; 
        
        return cb(null, user);

    } catch(e) {
        return cb(e);
    }
}))