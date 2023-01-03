const passport = require('passport');
const usermodel = require('../models/user');

var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.PRIVATE_KEY;

passport.use(new JwtStrategy(opts,async (jwt_payload, done)=> {
 try {
    const user= await usermodel.findOne({_id: jwt_payload.userid}).select('-password')
       
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    ;
 } catch (error) {
    
        done(error, false);
    
 }
}));
module.exports=isauth=()=>passport.authenticate('jwt',{session:false})
