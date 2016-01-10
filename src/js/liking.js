var $ = require('jquery')

function handleLike() {
  $('#like').click(function() {
    console.log('Liked!')
    // Note that Pup was liked, in the database or wherever we're storing that

    // Make card bigger, so it can accomodate the shelter info
    $('.puppy-card.mdl-card').height(550)
    // Show shelter info
    $('.shelter-info').show()
  })
}

function handleDisLike() {
  $('#dislike').click(function() {
    console.log('Disliked')
    // Note that Pup was disliked, in the database or wherever we're storing that
    // Display the next pup
  })
}

module.exports = {
  handleLike: handleLike,
  handleDisLike: handleDisLike
}
