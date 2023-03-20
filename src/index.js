const express = require('express');
const bodyParser = require('body-parser');
const connect = require('./config/database');

const app = express();
const PORT = 3000; 

const TweetService = require('./services/tweet-service');
const LikeService = require('./services/like-service');
const {UserRepository,TweetRepository} = require('./repository/index');
const apiRoutes = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',apiRoutes);

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

   // const repo = new HashtagRepository();

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
  
// let servic = new TweetService();

// const tweet = await servic.create({
//     content : '#CODES'
// });
// console.log(tweet);

const userRepo = new UserRepository();
const tweetRepo = new TweetRepository();

const tweets = await tweetRepo.getAll(0,4);
const user = await userRepo.create({
    email:'akki190820008@gamil.com',
    password:'123456',
    name:'Akshay'
});
const likeService = new LikeService();
await likeService.toggleLike(tweets[1].id,'Tweet',user.id);


});