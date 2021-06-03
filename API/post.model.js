// creating a mongoose schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define collection and schema for post
let Post = new Schema({
    title: {
        type: String
    },
    body: {
        type: String
    }
 },
  {
      collection:'posts'
});

module.exports = mongoose.model('Post', Post);