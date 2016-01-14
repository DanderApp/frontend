var $ = require('jquery')

function handleLogin() {
  $('.login').click(function(event) {
    var userCredentials = {
      email: 'chris@sevilleja.com',
      password: 'kittlesbee'
    }
    $.ajax(
      {
        url: 'https://dander.herokuapp.com/authenticate',
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
      var tokenWePretendWeGotFromServer = {
        "iss": "dander.io",
        "exp": 1300819380,
        "name": "Chris Sevilleja",
        "email": "chris@sevilleja.com",
        "user_id": "bloogedeeblah",
        "admin": true
      }
      sessionStorage.setItem('token', JSON.stringify(tokenWePretendWeGotFromServer))
      updateName()
    })
  })
}



function updateName() {
  var name = JSON.parse(sessionStorage.getItem('token')).name
  $('.user-name').text('Hello, ' + name + '!')
}

$(function() {
  handleLogin()
})
