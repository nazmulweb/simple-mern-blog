const express =  require('express');
const postController = require('../controllers/posts')
const router  =  express.Router();

router.get('/',  postController.getPost)
router.post('/',  postController.createPost);
router.patch('/:id',  postController.updatePost);

module.exports = router