var $ = require('jquery')

function hideShelterInfo() {
  $('.shelter-info').hide()
}

function addPetToPage(pet) {
  console.log(pet)
  $('.name').text(pet.name)
  if (pet.sex === 'M')
    pet.sex = 'Male'
  if (pet.sex === 'F')
    pet.sex = 'Female'
  if (pet.size === 'S')
    pet.size = 'Small'
  if (pet.size === 'M')
    pet.size = 'Medium'
  if (pet.size === 'L')
    pet.size = 'Large'
  var infoText = pet.sex + ' | ' + pet.age + ' | ' + pet.size
  $('.pet-info').text(infoText)
  // Until we get the real photos, set the photo here:
  pet.photo = "http://www.pedigreedatabase.com/uploads/oli/images/Labrador_Retriever_Cream_984334.jpg"
  $('.profile-photo').attr('src', pet.photo)
}

module.exports = {
  hideShelterInfo: hideShelterInfo,
  addPetToPage: addPetToPage
}
