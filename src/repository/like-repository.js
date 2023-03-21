const Like = require('../models/like');
const CrudRepository = require('../repository/crud-repository');

class LikeRepository extends CrudRepository {
  
    constructor (){
        super(Like);
    }


    async findByUserLikable (data){
        try {
            const like = await Like.findOne(data);
           // console.log("like from like repo");
            return like;
        } catch (error) {
            throw error;
        }
    }
}


module.exports = LikeRepository;