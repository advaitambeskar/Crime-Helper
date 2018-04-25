var oracledb = require('oracledb');
var bodyParser = require('body-parser');
oracledb.autoCommit = true;
oracledb.outFormat = oracledb.OBJECT;

export function getUnsafeAreas(req, res)
{
	var oracledb = require('oracledb');
	var dbConfig = require('./../../CONFIG.json');

	// Get a non-pooled connection
	oracledb.getConnection(
	  {
	    user          : dbConfig.user,
	    password      : dbConfig.password,
	    connectString : dbConfig.connectString
	  },
	  function(err, connection) {
	    if (err) {
	      console.error(err.message);
	      return;
	    }
	    connection.execute(
	      // The statement to execute
	      `select area_name,count(*) from ( select 
a.area_name, m.dr_number from SSWAPNIL.crime_master m , SSWAPNIL.area_info a where m.area_id = a.area_id )
group by area_name  order by count(*) desc`,
	      // execute() options argument.  Since the query only returns one
	      // row, we can optimize memory usage by reducing the default
	      // maxRows value.  For the complete list of other options see
	      // the documentation.

	      // The callback function handles the SQL execution results
	      function(err, result) {
	        if (err) {
	          console.error(err.message);
	          doRelease(connection);
	          return;
	        }
	       	var areas = {
	       		areas : result.rows
	       	}
	        res.send(userData, 201);
	        doRelease(connection);
	      });
	  });
}

// Note: connections should always be released when not needed
function doRelease(connection) {
  connection.close(
    function(err) {
      if (err) {
        console.error(err.message);
      }
    });
}