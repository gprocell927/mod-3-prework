    var _ = require("lodash");

    var worker = function (arr) {
      return _.chain(arr)
      .map(function (word) {
        return word + 'Chained';
      })
      .map(function(word) {
        return word.toUpperCase();
      })
      .sortBy()
      .value();
    };

    module.exports = worker;
