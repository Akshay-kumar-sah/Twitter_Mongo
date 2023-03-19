const express = require('express');
const connect = require('./config/database');
const Tweet = require('./models/tweet');
const Comment = require('./models/comment');
const app = express();
const PORT = 3000; 
const TweetRepository = require('././repository/tweet-repository');
const HashtagRepository = require('./repository/hashtag-repository');
const TweetService = require('./services/tweet-service');

app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`)
    await connect();
    console.log('Mongodb connected');

    // const tweet = await Tweet.create({
    //     content:'Third Tweet',
    //   //  userEmail:'abc@gamil.com'
    // });
    // console.log(tweet);

    // const tweet = await Tweet.findById('6412bc4ceca5b777f777a727');
    // console.log(tweet);

    // const tweetRepo = new TweetRepository();
    // const comment = await Comment.create({content:'new comments' });
    // const tweet = await tweetRepo.create({content:'new tweet here ! '});
    //   tweet.comments.push(comment);
    //   await tweet.save();
    //   console.log(tweet);

    //const tweetRepo = new TweetRepository();

    //const tweet = await tweetRepo.getWithComment('641408448ac4c0dd54d77b90');
    // const tweets = await tweetRepo.getAll(0,4);
    // console.log(tweets[0].contentWithEmail);

    // const tweet = await tweetRepo.create({
    //     content:'this is a hook content'
    // });
    // console.log(tweet);

    const repo = new HashtagRepository();

    // await repo.bulkCtreate(
    //     [

    //     {
    //         title:'Trend',
    //         tweets:[]

    //     },
    //     { 
    //         title:'Excited',
    //         tweets:[]

    //     },
    //     {
    //         title:'fun',
    //         tweets:[]

    //     }
    // ]

    // )

//  let response = await repo.findByName(['Trend','Excited']);
//  console.log(response);
//  response = response.map(tags => tags.title);
//  console.log(response);
  
let servic = new TweetService();

const tweet = await servic.create({
    content : '#CODES'
});
console.log(tweet);


});