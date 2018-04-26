var bodyParser = require('body-parser');
var crimes = require("../Services/crimeService.js");

async function getUnsafeAreas(req, res){

  return crimes.getUnsafeAreas(req, res);

}

module.exports =  {
  getUnsafeAreas : getUnsafeAreas
};