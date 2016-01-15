var $ = require('jquery')

function getUser() {
  if(localStorage.token) {
    return JSON.parse(atob(localStorage.token.split('.')[1])).user;
  }
}

function handleLogin() {
  $('.login').click(function(event) {
    var userCredentials = {
      email:    $('#email').val(),
      password: $('#password').val()
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
      // window.location = '/'
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

function handleSignup() {
  $('.sign-up').click(function() {
    var userInfo = {
      first_name: $('.signup-form #first-name').val(),
      last_name:  $('.signup-form #last-name').val(),
      email:      $('.signup-form #email').val(),
      password:   $('.signup-form #password').val(),
      zipcode:    $('.signup-form #zipcode').val()
    }

    $.ajax({
      method: 'post',
      url: 'https://dander.herokuapp.com/auth/signup',
      data: userInfo
    })
      .done(function(results) {
        console.log('Sign up successful:', results)
      })
      .fail(function() {
        console.log('Sign up failed.')
      })
  })
}

function updateName() {
  if (getUser()) {
    var name = getUser().first_name
    $('.user-name').text(name)
  } else {
    $('.user-name').text('Nobody')
  }
}

function logOut() {
  console.log('Logged out')
  localStorage.token = ''
  updateName()
  // window.location = '/'
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
  handleSignup()
  // Every time the page loads, update the display of user name on the page.
  updateName()
})
