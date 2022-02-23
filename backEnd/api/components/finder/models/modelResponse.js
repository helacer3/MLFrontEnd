const config = require("../../../../config/config");

/**
* Model Response
*/
const ModelResponse = {
  
  // list Items
  listItems : {
    "author": {
      "name": config.signature.name,
      "lastName": config.signature.lastName
    },
    "categories": {},
    "items": {},
    "pthCategory": []
  },

  // single Item
  singleItem: {
    "author": {
      "name": config.signature.name,
      "lastName": config.signature.lastName
    },
    "item": {
      "id": "",
      "title": "",
      "price": "",
      "picture": "",
      "condition": "",
      "free_shipping": "",
      "sold_quantity": 0,
      "permalink": "",
      "description": "",
      "catpath": {}
    }
  }
};

module.exports = ModelResponse;