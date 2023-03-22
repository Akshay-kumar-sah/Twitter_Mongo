const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


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


})
const User = mongoose.model('User',userSchema);
module.exports = User;