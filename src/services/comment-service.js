const {CommentRepository, TweetRepository} = require('../repository/index');

class CommentService  {

    constructor () {
        this.commentRepo = new CommentRepository();
        this.tweetRepository = new TweetRepository();
    }

   async create (modelId, modelType, userId,content) {
     //console.log('Inside comment service');
      if(modelType == 'Tweet'){
          var commentable = await this.tweetRepository.get(modelId);

       //  console.log('commentable',commentable);
         }else if (modelType == 'Comment'){
            var commentable = await this.commentRepo.get(modelId);
         }else{
           throw new Error ('Unknown model type');
         }

         const comment = await this.commentRepo.create({
            content: content,
            userId: userId,
            onModel: modelType,
            commentable: modelId,
            comments: []

         });
         //console.log('Comment ' ,comment);
         commentable.comments.push(comment);
         await commentable.save();

         return comment;

   }


}

module.exports = CommentService;