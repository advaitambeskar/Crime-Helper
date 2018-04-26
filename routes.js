import {getUsers, getTableCount} from './app/Controllers/userController.js';
import {getCategories} from './app/Controllers/dropdownController.js';
import {getUnsafeAreas, getCrimeAreasCategory, getCrimeAreasRaceGenderAge, getCrimeRamapantArea, getPercentageCrime, getCrimeByArea} from './app/Controllers/crimeController.js';
var bodyParser = require('body-parser');

module.exports = function(app) {

  app.get('/api/v1/getAllUsers', function(req, res){
    var rows = getUsers(req, res);
  });

  app.get('/api/v1/getUnsafeAreas', function(req, res){
    var rows = getUnsafeAreas(req, res);
    
  });

  app.get('/api/v1/getCrimeAreasCategory', function(req, res){
    console.log(req.query);
    var rows = getCrimeAreasCategory(req, res);
  });

  app.get('/api/v1/getCrimeRamapantArea', function(req, res){
    console.log(req.query);
    var rows = getCrimeRamapantArea(req, res);
  });

  app.get('/api/v1/getCrimeAreas/RaceGenderAge', function(req, res){
    var rows = getCrimeAreasRaceGenderAge(req, res);
  });

  app.get('/api/v1/getPercentageCrime/RaceGenderAge', function(req, res){
    console.log("Race AGE GENDER");
    var rows = getPercentageCrime(req, res);
  });

  app.get('/api/v1/getCategories', function(req, res){
    var rows = getCategories(req, res);
  });

  app.get('/api/v1/getTableEntryCount', function(req, res){
    var rows = getTableCount(req, res);
  });


  app.get('/api/v1/getCrimesByArea', function(req, res){
    var rows = getCrimeByArea(req, res);
  });



};