var $ = require('jquery')

function handleLogin() {
  $('#login').click(function(event) {
    var userCredentials = {
      name: 'Zeb',
      password: 'letmein'
    }
    $.ajax(
      {
        url: 'https://our.server/authenticate',
        method: 'post',
        data: userCredentials
      }
    ).done(function(response) {
      console.log('Success. Here\'s the response: ' + response)
    }).fail(function(msg) {
      console.log('Failed to log in ' + msg)
    }).always(function(data) {
      console.log('Set the user session token, whether or not you successfully logged in. Open up Resources > Session Storage.')
      console.log('In the real world, we\'ll only do this upon successful authentication, of course, but we\'re faking it until the server-side auth is up and running.')
      // Store the user on the session.
      sessionStorage.setItem('token', JSON.stringify(userCredentials))
    })
  })
}

$(function() {
  console.log('See this auth stuffz?')
  handleLogin()
})
