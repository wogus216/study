let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let blogSchema = new Schema({
  title: String,
  body: String,
});

module.exports = mongoose.model('Blog', blogSchema);
