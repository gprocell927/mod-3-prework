// This version would not work -- I'm not sure why.
//var _ = require ('lodash')
//
// module.exports = function(townList) {
//   return _.forEach(townList, function (town)
//     if (town.population > 1) {
//        town.size = 'big'
//     } elseif (town.population < 1 && > 0.5) {
//        town.size = 'med'
//     } else {
//        town.size = 'small'
//     }
//   )
// }

'use strict';

var _ = require("lodash");

module.exports = function(collection) {
  // add a size attribute to the collection based on the item's population
  return _.forEach(collection, function(item) {
    if (item.population > 1) {
      item.size = "big";
    } else if(item.population > 0.5) {
      item.size = "med";
    } else {
      item.size = "small";
    }
  });
};
