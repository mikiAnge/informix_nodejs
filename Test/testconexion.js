var informix = require('informixdb')
var dbcon = require('./conexiondb')

var conn = informix.openSync(dbcon.ifxdbs)

conn.closeSync()