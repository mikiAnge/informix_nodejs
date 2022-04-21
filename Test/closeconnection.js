var informix = require('informixdb')()
    , connStr = "SERVER=ol_informix1410;DATABASE=prueba;HOST=localhost;SERVICE=9088;UID=informix;PWD=m1k1b100d;"
//Blocks until the connection is open
informix.openSync(connStr);

//Blocks until the connection is closed
informix.closeSync();