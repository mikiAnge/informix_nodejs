const dbcon = require('./conexiondb')
var informix = require('informixdb')

try {
    var option = { connectTimeout: 40, systemNaming: true }
    var conn = informix.openSync(dbcon.informixdb, option)

    conn.query("select * from demo", function (err, rows) {
        if (err) {
            console.log(err)
        } else {
            console.log(rows)
        }
        conn.close()
    })
} catch (e) {
    console.log(e.message)
}
