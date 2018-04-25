import {getUsers} from './app/Controllers/userController.js';
import {getUnsafeAreas} from './app/Controllers/crimeController.js';
var bodyParser = require('body-parser');

module.exports = function(app) {

  app.get('/api/v1/getAllUsers', function(req, res){
    var rows = getUsers(req, res);
  });

  app.get('/api/v1/getUnsafeAreas', function(req, res){
    var rows = getUnsafeAreas(req, res);
    
  });
};