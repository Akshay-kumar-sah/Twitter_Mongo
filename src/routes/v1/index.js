const express = require('express');
const { createTweet,getTweet } = require('../../controllers/tweet-controller');
const  {toggleLike} = require('../../controllers/like-controller');
const {createComment } = require('../../controllers/comment-controller');
const {signup,login} = require('../../controllers/auth-controller');
const {authenticate} = require('../../middlewares.js/authenticate');
const router = express.Router();

router.post('/tweets',authenticate, createTweet);
router.post('/likes/toggle', toggleLike);
router.post('/comments',createComment);
router.get('/tweets/:id',getTweet);
router.post('/signup',signup);
router.post('/login',login);
module.exports = router;