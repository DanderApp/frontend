module.exports = (function () {
    var counter = 0;
    return function () {
      return counter += 1;
    }
})()
