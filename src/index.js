const express = require('express');
const connect = require('./config/database');
const Tweet = require('./models/tweet');
const Comment = require('./models/comment');
const app = express();
const PORT = 3000; 
const TweetRepository = require('././repository/tweet-repository');

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

    const tweetRepo = new TweetRepository();

    //const tweet = await tweetRepo.getWithComment('641408448ac4c0dd54d77b90');
    const tweets = await tweetRepo.getAll(0,4);
    console.log(tweets[0].contentWithEmail);


});