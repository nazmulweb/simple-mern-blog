const PostMessage = require('../models/postMessage')

exports.getPost = (req, res) =>{
    res.send('hello Express')
}

exports.createPost = (req, res) =>{
    res.send('create Express')
}