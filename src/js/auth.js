var $ = require('jquery')

function getUser() {
  if(localStorage.token) {
    return JSON.parse(atob(localStorage.token.split('.')[1])).user;
  }
}

function handleLogin() {
  $('.login').click(function(event) {
    var userCredentials = {
      email: 'Ryan@LuckyDogDigital.com',
      password: 'fuck'
    }
    $.ajax(
      {
        url: 'https://dander.herokuapp.com/auth/login',
        method: 'post',
        data: userCredentials
      }
    ).done(function(response) {
      console.log('Success. Here\'s the response: ' + response.token)
      localStorage.setItem('token', response.token)
      console.log('Here is the user: ' + getUser().first_name)
      updateName()
    }).fail(function(msg) {
      console.log('Failed to log in ' + msg)
    }).always(function(data) {
    })
  })
}

function updateName() {
  var name = getUser().first_name
  $('.user-name').text('Hello, ' + name + '!')
}

$(function() {
  if(localStorage.token) {
    $.ajaxSetup({
      headers: {
        Authorization: 'Bearer ' + localStorage.token
      }
    });
  }

  handleLogin()
})
