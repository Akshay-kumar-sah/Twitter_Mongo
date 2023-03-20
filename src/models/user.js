const mongoose = require('mongoose');


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

const User = mongoose.model('User',userSchema);
module.exports = User;