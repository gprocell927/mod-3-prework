var _ = require('lodash')

var sortItems = function(items) {
  return _.sortBy(items, 'quantity').reverse()
}

module.exports = sortItems
