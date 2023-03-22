const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({

content : {
    type:String,
    required:true
},
userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
},
onModel: {
    type: String,
    required: true,
    enum: ['Tweet','Comment']
},
commentable: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: 'onModel'
},
// likes: [
//     {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Like'
//     }
// ],
comments: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    }
]

},{timestamps:true});//timestamps for created at and updated at

const Comment = mongoose.model('Comment',commentSchema);

module.exports = Comment;