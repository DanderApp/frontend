var $ = require('jquery')

function getUser() {
  if(localStorage.token) {
    return JSON.parse(atob(localStorage.token.split('.')[1])).user;
  } else {
    return null
  }
}

function handleLogin() {
  $('.login').click(function(event) {
    var userCredentials = {
      email: $('#email').val(),
      password: $('#password').val()
    }
    console.log('Logging in with these credentials: ' + userCredentials)
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
      console.log('Failed to log in')
    })
  })
}

function handleLogout() {
  $('.logout').click(function() {
    logOut()
  })
}

function updateName() {
  if (getUser()) {
    var name = getUser().first_name
    $('.user-name').text('Hello, ' + name + '!')
  } else {
    $('.user-name').empty()
  }
}

function logOut() {
  console.log('Logged out')
  localStorage.token = ''
  updateName()
  // window.location = '/index.html'
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
  handleLogout()
})
