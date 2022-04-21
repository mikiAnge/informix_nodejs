var Informix = require('informixdb').Informix;
var informix = new Informix({
    database:'prueba@lo_informix',
    username:'informix',
    password:'m1k1b100d'
})
informix.on('error', function(err){
    console.log('[event:error]', err)
})
informix
    .query('select count(*) from demo;')
    .then(function (cursor){
        return cursor.fetchAll({close:true})
    })
    .then(function (results){
        console.log('[query] resultado:', results)
    })
    .catch(function (err){
        console.log('Error: '+err)
    })