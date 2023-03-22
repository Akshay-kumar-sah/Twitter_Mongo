const Tweet = require('../models/tweet');
const CrudRepository = require('./crud-repository');

class TweetRepository extends CrudRepository{
    constructor(){
        super(Tweet);
    }

async create (data) {
try {
    const tweet = await Tweet.create(data);
    return tweet;
} catch (error) {
    console.log('Something went wrong in repository layer',error);
}
   
}


async getWithComment(id){
    try {
        const tweet = await Tweet.findById(id).populate({
            path:'comments',
            populate:{
                path:'comments'
            }
        }).lean();//use  lean for the creating js obj insted of mongoose obj 
        return tweet;
    } catch (error) {
        console.log('Something went wrong in repository layer',error);
    }
}

async update (tweetId, data) {
    try {
        const tweet = await Tweet.findByIdAndUpdate(tweetId, data,{new:true});
        return tweet;
    } catch (error) {
        console.log('Something went wrong in repository layer',error);
    }
}



async getAll(offset, limit){
    try {
        const tweet = await Tweet.find().skip(offset).limit(limit);
        return tweet;
    } catch (error) {
        console.log('Something went wrong in repository layer',error);
    }

}


async find(data){
    try {
        const tweet = await Tweet.findById(data).populate({path:'likes'});
        return tweet;
    } catch (error) {
        console.log('Something went wrong in repository layer',error);
    }
}
}

module.exports = TweetRepository;