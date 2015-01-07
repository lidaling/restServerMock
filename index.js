var Promise = require('bluebird')
    , express = require('express')
    , fs = require('fs')

    , routesSetup = require('./lib/routes_setup')

    , FILE_ENCODING = require('./constants/contstants').FILE_ENCODING

module.exports = start

function start(serverConfFile) {

    return new Promise(function (resolve, reject) {

        if (!serverConfFile) return resolve()

        fs.readFile(serverConfFile, FILE_ENCODING, read)

        function read(err, data) {

            if (err) return reject(err)

            var serverConf = JSON.parse(data)
                , routes = serverConf.routes
                , port = serverConf.port
                , listener = express()
                , server = undefined

            routesSetup(listener, routes)

            server = listener.listen(port)

            return resolve(server)

        }

    })

}

