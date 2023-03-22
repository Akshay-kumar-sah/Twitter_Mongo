const CrudRepository = require('../repository/crud-repository');
const Comment = require('../models/comment');

class CommentRepository extends CrudRepository{
   constructor() {
      super(Comment);
   }


}


module.exports = CommentRepository;