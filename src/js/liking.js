var $ = require('jquery')
var display = require('./display')
var petIndex = require('./counter')

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
  var likeData = {
    petfinder_id: currentPet.petfinder_id
  }
  $.ajax({
    method: "POST",
    url: "/",
    data: likeData
  })
    .done(function(msg) {
      console.log('Like Saved: ' + msg )
    })
    .fail(function(msg) {
      console.log('Failed to save: ' + msg)
    })
}

function saveDisLike() {
  console.log('Pretend the dislike is being saved somewhere.')
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
