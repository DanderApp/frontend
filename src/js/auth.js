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
    }).fail(function(msg) {
      console.log('Failed to log in ' + msg)
    }).always(function(data) {
    })
  })
}

function updateName() {
  var name = JSON.parse(sessionStorage.getItem('token')).name
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
