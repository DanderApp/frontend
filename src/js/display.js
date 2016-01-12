var $ = require('jquery')

function hideShelterInfo() {
  $('.shelter-info').hide()
}

function addPetToPage(pet) {
  $('.name').text(pet.name)
  var infoText = 'Male' + ' | ' + pet.age
  $('.pet-info').text(infoText)
  $('.profile-photo').attr('src', pet.photo)
}

module.exports = {
  hideShelterInfo: hideShelterInfo,
  addPetToPage: addPetToPage
}
