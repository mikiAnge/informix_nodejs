var informix = require("informixdb")
var connStr = "SERVER=ol_informix1410;HOST=localhost;SERVICE=9088;UID=informix;PWD=m1k1b100d;"

var DB_NAME = "practico"

var dropDB = informix.dropDbSync(DB_NAME, connStr);

if (dropDB) {
  console.log("Database dropped successfully.");
}