const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({

content : {
    type:String,
    required:true
},
userEmail:{
    type:String
}

},{timestamps:true});//timestamps for created at and updated at

const Comment = mongoose.model('Comment',commentSchema);

module.exports = Comment;