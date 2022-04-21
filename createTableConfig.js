var informix = require('informixdb')
    , connStr = require('./conexiondb')

informix.open(connStr.ifxdbs, function (err, conn) {
    conn.querySync("create table config (id serial primary key, utilidad decimal(14,2), fecha_cierre date)")
    conn.querySync("insert into config VALUES (1,5343.00,'31/12/2019')")
    var stmt = conn.prepareSync("select * from config")
    var result = stmt.executeSync()
    var data = result.fetchAllSync()
    console.log("Fetched data = ", data)
    result.closeSync()
    //conn.querySync("drop table config")
    conn.closeSync()
})