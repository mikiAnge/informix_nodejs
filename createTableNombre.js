var informix = require('informixdb')
    , connStr = require('./conexiondb')

informix.open(connStr.ifxdbs, function (err, conn) {
    conn.querySync("create table nombre (nro_socio serial primary key, nombre char(90))")
    conn.querySync("insert into nombre VALUES (1,'Juan Fernando Pérez del Corral')")
    conn.querySync("insert into nombre VALUES (2,'Valentina Laverde de la Rosa')")
    conn.querySync("insert into nombre VALUES (3,'Oscar de la Renta')")
    conn.querySync("insert into nombre VALUES (4,'Sara Teresa Sánchez del Pinar')")
    conn.querySync("insert into nombre VALUES (5,'Efrain de las Casas Mejia')")
    conn.querySync("insert into nombre VALUES (6,'Julieta Ponce de León')")
    conn.querySync("insert into nombre VALUES (7,'Martin Elias de los Rios Acosta')")
    var stmt = conn.prepareSync("select * from nombre")
    var result = stmt.executeSync()
    var data = result.fetchAllSync()
    console.log("Fetched data = ", data)
    result.closeSync()
    //conn.querySync("drop table nombre")
    conn.closeSync()
})