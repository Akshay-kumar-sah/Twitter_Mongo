const LikeService = require('../services/like-service');


const likeService = new LikeService();

const toggleLike = async (req, res) => {
    try {
        
       const response = await likeService.toggleLike(req.query.modelId,req.query.modelType,req.body.userId);
      // console.log("response", response);
       return res.status(200).json({
          success: true,
          message: 'Successfully toggled like',
          data: response,
          err: {}

       })


    } catch (error) {
         res.status(500).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            err: error
  
         })
  
    }


}


module.exports = {
    toggleLike
}