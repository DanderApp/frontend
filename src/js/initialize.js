var display = require('./display')

module.exports = function(pet) {
  display.hideSpinner()
  display.showCard()
  display.hideShelterInfo()
  display.addPetToPage(pet)
  console.log(pet)
}
