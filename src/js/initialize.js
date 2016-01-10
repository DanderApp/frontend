var $ = require('jquery')

function hideShelterInfo() {
  console.log('Hiding the shelter info.')
  $('.shelter-info').hide()
}

module.exports = {
  hideShelterInfo: hideShelterInfo
}
