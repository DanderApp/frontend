// Require all dependent modules here, just like any node.js project.
var liking = require('./liking')
var initialize = require('./initialize')
var $ = require('jquery')
var fetch = require('./fetch')

var puppyURL = __dirname + 'fake-data.json'
var getPuppies = fetch(puppyURL)

// Invoke them here.
// We'll probably have things like
//   makeAJAXCall()
//   handleLikeClick()
//   handleFacebookShare()

// We won't have very much code here, just invocations of functions declared elsewhere.
$(function() {
  getPuppies
    .then(function(pets) {
      console.log(pets)
    })
    .catch(function(err) {
      console.error('There was an error fetching the pets', err)
    })
  initialize.hideShelterInfo()
  liking.handleLike()
  liking.handleDisLike()
})
