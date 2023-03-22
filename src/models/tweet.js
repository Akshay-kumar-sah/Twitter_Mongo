const mongoose = require('mongoose');


const tweetSchema = new mongoose.Schema({

content : {
    type:String,
    required:true,
    max:[250,'Tweet can not be more than 250 characters']
},

likes: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Like'
    }
],

comments : [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment' 
    }
]

},{timestamps:true});//timestamps for created at and updated at

// tweetSchema.virtual('contentWithEmail').get(function process() {
//     return `${this.content} \nCreated by : ${this.userEmail}`
// });

// tweetSchema.pre('save', function (next){
//     console.log('Inside hook');
//     this.content = this.content + '...';
//     next();
// });
const Tweet = mongoose.model('Tweet',tweetSchema);

module.exports = Tweet;