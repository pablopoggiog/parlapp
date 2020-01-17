const passport = require('passport');

const {Strategy, ExtractJwt} = require('passport-jwt');
const boom = require('@hapi/boom');

const controller = require('../../components/user/controller');
const {config} = require('');

passport.use(new Strategy({
    secretOrKey: 'secret',
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    async function(tokenPayload, cb) {

        try {
            const user = controller.getUsers(tokenPayload.email);
            if (!user) {
                return cb(boom.unauthorized(), false);
            }

            delete user.password;

            cb(null, {...user, scopes: tokenPayload.scopes})
        }
        catch(e) {
            
        }
    }
)
)