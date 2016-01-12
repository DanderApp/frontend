var display = require('./display')

module.exports = function(pet) {
  display.hideShelterInfo()
  display.addPetToPage(pet)
  console.log(pet)
}
