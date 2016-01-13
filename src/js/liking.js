var $ = require('jquery')
var display = require('./display')
var petIndex = require('./counter')
// var config = require('./config')

function handleLike() {
  $('#like').click(function() {
    // Note that Pup was liked, in the database or wherever we're storing that
    saveLike()
    // Make card bigger, so it can accomodate the shelter info
    $('.puppy-card.mdl-card').height(550)
    // Show shelter info
    $('.shelter-info').show()
  })
}

function handleDisLike() {
  $('#dislike').click(function() {
    // Note that Pup was disliked, in the database or wherever we're storing that
    saveDisLike()
    // Display the next pup
    // displayNextPet()
  })
}

function handleNext(pets) {
  $('#next').click(function() {
    display.addPetToPage(pets[petIndex()])
  })
}

function saveLike() {
  var currentPet = JSON.parse(sessionStorage.getItem('currentPet'))
  var user_id = JSON.parse(sessionStorage.getItem('token')).user_id
  var likeData = {
    user_id: user_id,
    petfinder_id: currentPet.petfinder_id,
    liked: true
  }
  console.log('Submitting this data to server to save the Like: ' + JSON.stringify(likeData))
  $.ajax({
    method: "POST",
    url: "http://dander.herokuapp.com/connections/new",
    data: likeData
  })
    .done(function() {
      console.log('Like saved.')
    })
    .fail(function() {
      console.log('Failed to save.')
    })
}

function saveDisLike() {
  var currentPet = JSON.parse(sessionStorage.getItem('currentPet'))
  var user_id = JSON.parse(sessionStorage.getItem('token')).user_id
  var likeData = {
    user_id: user_id,
    petfinder_id: currentPet.petfinder_id,
    liked: false
  }
  console.log('Submitting this data to server to save the dislike: ' + JSON.stringify(likeData))
  $.ajax({
    method: "POST",
    url: "http://dander.herokuapp.com/connections/new",
    data: likeData
  })
    .done(function(msg) {
      console.log('Dislike saved: ' + msg)
    })
    .fail(function(msg) {
      console.log('Failed to save: ' + msg)
    })
}

// function displayNextPet(pet) {
//   console.log('Pretend we\'re showing the next pet card.')
//   // $('.name').text(pet.name)
//   $('.name').text('Rob')
//   // var infoText = 'Male' + ' | ' + pet.age
//   // $('.pet-info').text(infoText)
//   // $('.profile-photo').attr('src', pet.photo)
// }

module.exports = {
  handleLike: handleLike,
  handleDisLike: handleDisLike,
  handleNext: handleNext
}
