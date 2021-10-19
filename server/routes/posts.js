const express =  require('express');
const postController = require('../controllers/posts')
const router  =  express.Router();

router.get('/',  postController.getPost)
router.post('/',  postController.createPost)

module.exports = router