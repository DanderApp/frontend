var $ = require('jquery')

function handleLogin() {
  $('.login').click(function(event) {
    console.log('Clicked login.')
    var userCredentials = {
      name: 'Zeb',
      password: 'letmein'
    }
    $.ajax(
      {
        url: 'https://dander.herokuapp.com/auth/facebook',
        method: 'get'
      }
    ).done(function(response) {
      console.log('Success. Here\'s the response: ' + response)
    }).fail(function(msg) {
      console.log('Failed to log in ' + msg)
    })
  })
}

function updateName() {
  var name = JSON.parse(sessionStorage.getItem('token')).name
  $('.login').text('Hello, ' + name + '!')
}

$(function() {
  handleLogin()
})
