'use strict';

/**
 * searches inventory
 * By passing in the appropriate options, you can search for available inventory in the system 
 *
 * searchString String pass an optional search string for looking up inventory (optional)
 * skip Integer number of records to skip for pagination (optional)
 * limit Integer maximum number of records to return (optional)
 * returns List
 **/
exports.searchInventory = function(searchString,skip,limit) {
  return new Promise(function(resolve, reject) {
    let jsonData = require('../data.json');
    var resp = {};
    resp['application/json'] = jsonData;
    if (Object.keys(resp).length > 0) {
      resolve(resp[Object.keys(resp)[0]]);
    } else {
      resolve();
    }
  });
}

