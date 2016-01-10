var $ = require('jquery')

function handleLike() {
  $('#like').click(function() {
    console.log('Liked!')
    // Make card bigger, so it can accomodate the shelter info
    $('.puppy-card.mdl-card').height(580)
    // Show shelter info
    $('.shelter-info').show()
  })
}

function handleDisLike() {
  $('#dislike').click(function() {
    console.log('Disliked')
  })
}

module.exports = {
  handleLike: handleLike,
  handleDisLike: handleDisLike
}
