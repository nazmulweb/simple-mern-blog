const mongoose = require('mongoose');

const postShema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedField: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const PostMessage = mongoose.model('PostMessage', postShema);

module.exports = PostMessage