
const {TweetRepository, HashtagRepository} = require('../repository/index');

class TweetService {

    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

   async create (data) {

        const content = data.content;
        let tags = content.match(/#[a-zA-Z0-9_]+/g) // this regex extracts hashtags
        .map((tag) => tag.substring(1).toLowerCase());
        

        const tweet = await this.tweetRepository.create(data);
        let alredyPresentTags = await this.hashtagRepository.findByName(tags);
     let  titleOfPresentTags = alredyPresentTags.map(tags => tags.title);
        let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag));
         newTags = newTags.map(tag => {
            return {title:tag,tweets:[tweet.id]}
        });
         await this.hashtagRepository.bulkCreate(newTags);
          alredyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
          });
          return tweet;

        // console.log(response);
        // todo create hashtags and add here 
        /**
         * 1. bulkcreate in mongoose
         * 2. filter title of hashtags based on multiple tags
         * 3. How to add tweet id inside all the hashtags
         */

    


    }

    async get (tweetId) {
      const tweet = await this.tweetRepository.getWithComment(tweetId);
      return tweet;

    }


};

module.exports = TweetService;