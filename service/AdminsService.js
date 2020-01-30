'use strict';


/**
 * adds an inventory item
 * Adds an item to the system
 *
 * inventoryItem InventoryItem Inventory item to add (optional)
 * no response value expected for this operation
 **/
exports.addInventory = function(inventoryItem) {
  return new Promise(function(resolve, reject) {
    var jsonData =   require('../data.json');
    const fs = require('fs'); 
    jsonData.push(inventoryItem);
    fs.writeFile("data.json", JSON.stringify(jsonData) , 'utf8', function (err) {
      if (err) {
          console.log("An error occured while writing JSON Object to File.");
          reject(err);
      }
      console.log("JSON file has been saved.");
    }); 
    var resp = {};
    resp['application/json'] = jsonData;
    //jsonData.append(JSON.parse(inventoryItem));
    if(jsonData.length > 0){
      resolve(resp['application/json']);
    }
    resolve(jsonData);
  });
}

