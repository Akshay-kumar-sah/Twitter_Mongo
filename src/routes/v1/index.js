const express = require('express');
const { createTweet,getTweet } = require('../../controllers/tweet-controller');
const  {toggleLike} = require('../../controllers/like-controller');
const {createComment } = require('../../controllers/comment-controller');
const router = express.Router();

router.post('/tweets',createTweet);
router.post('/likes/toggle', toggleLike);
router.post('/comments',createComment);
router.get('/tweets/:id',getTweet);

module.exports = router;