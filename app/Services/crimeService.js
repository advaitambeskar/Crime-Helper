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
	      `SELECT * FROM (select AREA_NAME, COUNT(*) AS NUM  
        from SSWAPNIL.crime_master , SSWAPNIL.area_info , SSWAPNIL.crime_description 
        WHERE SSWAPNIL.crime_description.crimedescription LIKE :cat
        and SSWAPNIL.crime_master.area_id = SSWAPNIL.area_info.area_id
        and SSWAPNIL.crime_description.crimecode = SSWAPNIL.crime_master.crime_code
        AND TIME_OCCURRED>=:startTime AND TIME_OCCURRED<:endTime
        GROUP BY AREA_NAME ORDER BY NUM DESC ) WHERE ROWNUM<6`,
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


export function getCrimeRamapantArea(req, res)
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

	      `
	      SELECT * FROM (select AREA_NAME, COUNT(*) AS NUM  
        from SSWAPNIL.crime_master , SSWAPNIL.area_info , SSWAPNIL.crime_description 
        WHERE SSWAPNIL.crime_description.crimedescription LIKE :cat
        and SSWAPNIL.crime_master.area_id = SSWAPNIL.area_info.area_id
        and SSWAPNIL.crime_description.crimecode = SSWAPNIL.crime_master.crime_code
        AND TIME_OCCURRED>=:startTime AND TIME_OCCURRED<:endTime
        GROUP BY AREA_NAME ORDER BY NUM DESC ) WHERE ROWNUM<6`,
        {cat : '%' + req.cat + '%', startTime : req.start, endTime : req.end},

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

export function getCrimeAreasRaceGender(req, res)
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
	      `SELECT AREA FROM (SELECT COUNT(*) AS No, c.AREA_NAME AS AREA FROM SSWAPNIL.CRIME_MASTER A, SSWAPNIL.VICTIM_INFO B,SSWAPNIL.area_info c WHERE B.CRIMEID = A.DR_NUMBER AND a.Area_id = c.area_id and  B.RACE = :race AND B.SEX = :gen AND   B.AGE > :age
			GROUP BY c.AREA_NAME ORDER BY No DESC) WHERE ROWNUM < 6`,
        {race : req.race, gen : req.gender, age : parseInt(req.age)},

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