const mongoose = require('mongoose');


const tweetSchema = new mongoose.Schema({

content : {
    type:String,
    required:true
},
userEmail:{
    type:String
},
comment : [
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'Comment'
    }
]

},{timestamps:true});//timestamps for created at and updated at

const Tweet = mongoose.model('Tweet',tweetSchema);

module.exports = Tweet;