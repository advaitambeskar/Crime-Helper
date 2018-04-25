var bodyParser = require('body-parser');
var user = require("../services/userService.js");

async function getUsers(req, res){

  return user.getAll(req, res);

}

module.exports =  {
  getUsers : getUsers
};