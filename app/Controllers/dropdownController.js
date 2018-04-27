var bodyParser = require('body-parser');
var dropdown = require("../Services/dropdownService.js");

async function getCategories(req, res){

  return dropdown.getCategories(req, res);

}

module.exports =  {
  getCategories : getCategories
};