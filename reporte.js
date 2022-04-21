var informix = require('informixdb')
var dbcon = require('./conexiondb')

informix.open(dbcon.ifxdbs, function (err, conn) {
    conn.query("select nombre.nro_socio, nombre.nombre, certificados.nro_certif, certificados.emision, config.fecha_cierre, certificados.emision from nombre inner join certificados on nombre.nro_socio = certificados.nro_socio inner join config on config.id = config.id", function(err, data){
    //var result = stmt.executeSync();
    /*var data = 0;
    while (data = result.fetchSync({ fetchMode: 2 })) {
      console.log(data);
    }*/
    const reporte = data.map(function(item){
        return {
            nro_socio: item.nro_socio,
            nombre: item.nombre,
            nro_certif: item.nro_certif,
            fecha_cierre_retiro: item.fecha_cierre,
            dias_desde_emición_a_cierre:daySum((new Date(item.fecha_cierre).getTime() - new Date(item.emision).getTime()) / (1000 * 3600 * 24))
        }
    })
    console.log(reporte)
    })
})

function daySum(x){
    if (x > 360)
        return 360
    else
        return x
}