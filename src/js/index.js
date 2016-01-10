// Require all dependent modules here, just like any node.js project.
var liking = require('./liking')
var $ = require('jquery')

// Invoke them here.
// We'll probably have things like
//   makeAJAXCall()
//   handleLikeClick()
//   handleFacebookShare()

// We won't have very much code here, just invocations of functions declared elsewhere.
$(function() {
  liking.handleLike()
  liking.handleDisLike()
})
