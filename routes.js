#!import {getUsers} from './controllers/userController.js';

var bodyParser = require('body-parser');

module.exports = function(app) {

  app.get('/api/v1/getAllUsers', function(req, res){
    var rows = getUsers(req, res);
    
  });
};