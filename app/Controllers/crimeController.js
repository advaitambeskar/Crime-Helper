var bodyParser = require('body-parser');
var crimes = require("../services/crimeService.js");

async function getUnsafeAreas(req, res){

  return crimes.getUnsafeAreas(req, res);

}

module.exports =  {
  getUnsafeAreas : getUnsafeAreas
};