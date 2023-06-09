#! /usr/bin/env node 


require('yargs').command('serve [port]','start the server',(yargs)=>{
    yargs.positional('port',{
        describe:'port to bind on',
        default: 5000
    })
},(argv)=>{
    if(argv.verbose) console.info(`start server on: ${argv.port}`)
   serve(argv.port)
}).option('verbose',{
    alias:'v',
    default:false
}).argv
