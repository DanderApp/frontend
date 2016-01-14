var $ = require('jquery')
var display = require('./display')
var petIndex = require('./counter')

function handleLike(pets) {
  $('#like').click(function() {
    likeFeedback('Liked!')
    saveLike()
    handleNext(pets)
  })
}

function handleDisLike(pets) {
  $('#dislike').click(function() {
    likeFeedback('Not so much!')
    saveDisLike()
    // displayNextPet(pets)
    handleNext(pets)
  })
}

function handleNext(pets) {
  display.addPetToPage(pets[petIndex()])
}
function displayNextPet(pets) {
  display.addPetToPage(pets[petIndex()])
}

function likeFeedback(feedbackText) {
  $('.click-feedback').text(feedbackText).fadeOut(1000, function() {
    $('.click-feedback').empty().show()
  })
}

function saveLike() {
  var currentPet = JSON.parse(sessionStorage.getItem('currentPet'))
  var token = sessionStorage.getItem('token')
  if (token) {
    var user_id = JSON.parse(token).user_id
  } else {
    var user_id = null
  }
  var likeData = {
    user_id: user_id,
    petfinder_id: currentPet.petfinder_id,
    liked: true
  }
  console.log('Submitting this data to server to save the Like: ' + JSON.stringify(likeData))
  $.ajax({
    method: "POST",
    url: "https://dander.herokuapp.com/connections/new",
    data: likeData,
    xhrFields: {
       withCredentials: true
    }
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
  var token = sessionStorage.getItem('token')
  if (token) {
    var user_id = JSON.parse(token).user_id
  } else {
    var user_id = null
  }
  var likeData = {
    user_id: user_id,
    petfinder_id: currentPet.petfinder_id,
    liked: false
  }
  console.log('Submitting this data to server to save the dislike: ' + JSON.stringify(likeData))
  $.ajax({
    method: "POST",
    url: "https://dander.herokuapp.com/connections/new",
    data: likeData
  })
    .done(function(msg) {
      console.log('Dislike saved: ' + msg)
    })
    .fail(function(msg) {
      console.log('Failed to save: ' + msg)
    })
}

module.exports = {
  handleLike: handleLike,
  handleDisLike: handleDisLike,
  handleNext: handleNext
}
