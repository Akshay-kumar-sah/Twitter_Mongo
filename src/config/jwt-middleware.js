const JWT = require('passport-jwt');
const User = require('../models/user');


const JwtStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;
   
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
};

const passportAuth = (passport) => {

try {
 // console.log("inside strategy");
  passport.use(new JwtStrategy(opts, async(jwt_payload, done) =>{
   // console.log("req sent to strategy");

    const user = await User.findById(jwt_payload.id);
    if(!user){
     return  done(null, false);
    }else{
       return done(null, user);
    }
   }));
 
} catch (error) {
  throw error;
}
 
  }


  module.exports = {
 
    passportAuth
  }