/*var informix = require('informixdb');
informix.open("SERVER=lo_informix1410;DATABASE=prueba;HOST=localhost;SERVICE=9088;UID=informix;PWD=m1k1b100d;", function (err,conn) {
    if (err) return console.log(err);
  
    conn.query('select * from demo', function (err, data) {
    if (err) console.log(err);
    else console.log(data);

    conn.close(function () {
      console.log('done');
    });
  });
});*/

/// La conexion buena
/// Conexion v2 a informix con sync

var informix = require('informixdb')
var dbcon = require('./conexiondb')

informix.open(dbcon.ifxdbs, function (err, conn) {
    if (err) return console.log(err);
    var query = 'select * from certificados';
    conn.queryResult(query, function (err, result) {
      if (err) { console.log(err); }
      else {
        console.log("data = ", result.fetchAllSync());
        // Not supported for now.
        //console.log("metadata = ", result.getColumnMetadataSync());
        result.closeSync(); // Must call in application.
        conn.closeSync();
      }
    })
  })
