//Base de datos Asincrona
var informix = require("informixdb")
var connStr = "SERVER=ol_informix1410;HOST=localhost;SERVICE=9088;UID=informix;PWD=m1k1b100d;"

var DB_NAME = "practico"

var createDB = informix.createDbSync(DB_NAME, connStr)

if (createDB) {
    console.log("Database creada!!!.")
    var conStr = connStr + ";" +  "DATABASE=" + DB_NAME

    informix.open(conStr, function (err, conn) {
        if (err) console.log(err)
        else console.log("Database conexion abierta.")
    })
}