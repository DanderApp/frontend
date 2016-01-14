// Require all dependent modules here, just like any node.js project.
var liking = require('./liking')
var likes = require('./likes-list')
var initialize = require('./initialize')
var $ = require('jquery')
var fetch = require('./fetch')

// var puppyURL = __dirname + 'fake-data-2.json'
var puppyURL = 'https://dander.herokuapp.com/apitest'
var getPuppies = fetch(puppyURL)

// We won't have very much code here, just invocations of functions declared elsewhere.
$(function() {
  $('.puppy-card').hide()
  getPuppies
    .then(function(data) {
      var pets = JSON.parse(data)
      // initialize the page with the first pet
      initialize(pets[0])

      // Handle the behavior on the Looking tab
      liking.handleLike()
      liking.handleDisLike()
      liking.handleNext(pets)

      // Handle the behavior on the Likes tab
      likes.handleDisplayLikes()
    })
    .catch(function(err) {
      console.error('There was an error fetching the pets', err)
    })
})
