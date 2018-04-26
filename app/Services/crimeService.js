var oracledb = require('oracledb');
var bodyParser = require('body-parser');
oracledb.autoCommit = true;
oracledb.outFormat = oracledb.OBJECT;

export function getCrimeAreasCategory(req, res)
{
	var oracledb = require('oracledb');
	var dbConfig = require('./../../CONFIG.json');
	var startT = (parseInt(req.page) - 1) * req.perPage;
	var endT = (parseInt(req.perPage) * parseInt(req.page))
	console.log(startT + ' ' +endT);
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
	      `SELECT* FROM (select AREA_NAME, COUNT(*) AS NUM  
        from SSWAPNIL.crime_master 
        WHERE CRIME_CODE_DESCRIPTION LIKE :cat
        AND TIME_OCCURRED >= :startTime AND TIME_OCCURRED < :end
        GROUP BY AREA_NAME ORDER BY NUM DESC) `,
        {cat : '%' + req.cat + '%', startTime : req.start, end : req.end},

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
	        res.send(areas, 201);
	        doRelease(connection);
	      });
	  });
}

export function getCrimeAreasFilter(req, res)
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
	      `SELECT* FROM (select AREA_NAME, COUNT(*) AS NUM  
        from SSWAPNIL.crime_master 
        WHERE CRIME_CODE_DESCRIPTION LIKE :cat
        AND TIME_OCCURRED >= :startTime AND TIME_OCCURRED < :end
        GROUP BY AREA_NAME ORDER BY NUM DESC ) WHERE ROWNUM<100`,
        ['%' + req.cat + '%', req.start, req.end],

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
	        res.send(areas, 201);
	        doRelease(connection);
	      });
	  });
}

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
	        res.send(areas, 201);
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