var $ = require('jquery')

function handleLogin() {
  $('#login').click(function(event) {

    $.ajax(
      {
        url: 'http://localhost:3000/auth/facebook',
        method: 'get'
      }
    ).done(function(data) {
      console.log('Success. Here\'s the data: ' + data)
    })
  })
}

$(function() {
  handleLogin()
})
