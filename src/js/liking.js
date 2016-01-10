var $ = require('jquery')

function handleLike() {
  console.log('Handle liking is happening!')
  $('#like').click(function() {
    console.log('Liked')
  })
}

function handleDisLike() {
  console.log('Handle liking is happening!')
  $('#dislike').click(function() {
    console.log('Disliked')
  })
}

module.exports = {
  handleLike: handleLike,
  handleDisLike: handleDisLike
}
