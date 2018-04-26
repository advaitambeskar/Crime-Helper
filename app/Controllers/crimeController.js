var bodyParser = require('body-parser');
var crimes = require("../Services/crimeService.js");

async function getUnsafeAreas(req, res){

  return crimes.getUnsafeAreas(req, res);

}

async function getCrimeAreasCategory(req, res){

	var data = {
		"cat" : req.query.category,
		"start" : req.query.startTime, 
		"end" : req.query.endTime,
		"page" : parseInt(req.query.page),
		"perPage" : parseInt(req.query.perPage)

	}

	console.log(data);
  return crimes.getCrimeAreasCategory(data, res);

}

module.exports =  {
  getUnsafeAreas : getUnsafeAreas,
  getCrimeAreasCategory :getCrimeAreasCategory
};