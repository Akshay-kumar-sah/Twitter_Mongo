const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({

 email:{
   type: String,
   requiered: true,
   unique: true
 },
 password: {
    type: String,
    requiered: true
 },
 name: {
    type: String,
    requiered: true
 }


}, {timestapms:true});

userSchema.pre('save',function(next){
const user = this;
const SALT = bcrypt.genSaltSync(9);
const encryptedPassword = bcrypt.hashSync(user.password, SALT);
user.password = encryptedPassword;
next();
});

userSchema.methods.comparePassword = function compare(password){
   return bcrypt.compareSync(password, this.password);
}

userSchema.methods.genJWT = function generate(){
 return jwt.sign({id: this._id, email: this.email},'secret',{
   expiresIn: '1h'
 });
}
const User = mongoose.model('User',userSchema);
module.exports = User;