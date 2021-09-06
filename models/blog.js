const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a titlel."]
    }, 
    content: {
        type: String,
    },
    image: {
        type: Array,
    },
    hidden: {
        type: Boolean,
        default: false
    }
});

const Blog = mongoose.model('BlogSchema', BlogSchema);
module.exports = Blog