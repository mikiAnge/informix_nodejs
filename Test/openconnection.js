var informix =  require("informixdb")()
    , connStr = "SERVER=ol_informix1410;HOST=localhost;SERVICE=9088;UID=informix;PWD=m1k1b100d;"

var conStr = connStr + ";" + "DATABASE=" + "prueba"
informix.open(conStr, function (err, conn) {
    if (err) console.log(err);
    else console.log("Database connection abierta")
})