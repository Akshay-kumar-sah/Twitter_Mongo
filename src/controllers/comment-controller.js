const CommentService = require('../services/comment-service');

const commentService = new CommentService();

const createComment = async (req, res) =>{
try {
    
const response = await commentService.create(req.query.modelId,req.query.modelType,req.body.userId, req.body.content);

return res.status(201).json({
    success: true,
    message: 'Successfully create a new comment',
    data: response,
    err:{}
});


} catch (error) {
    
    return res.status(201).json({
        success: false,
        message: 'Something went wrong',
        data: {},
        err:error
    });


}



}

module.exports = {
    createComment
}