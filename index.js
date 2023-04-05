'use strict'
console.log('install...')
var os =require('os')
function home(){
    return process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
}

function homedir(){
    var env=process.env;
    var home =env.HOME;
    var user = env.LOGNAME || env.USER || env.LNAME || env.USERNAME;

    if(process.platform==='win32'){
        return env.USERPROFILE || env.HOMEDRIVE + env.HOMEPATH || home || null
    }

    if(process.platform==='darwin'){
        return home || (user? '/Users/'+user:null);
    }

    if(process.platform==='linux'){
        return home || (process.getuid()===0?'/root':(user?'/home/'+user:null));
    }

    return home || null
}

module.exports = typeof os.homedir === 'function' ? os.homedir : homedir

console.log(home())
console.log(homedir())
console.log(process.env.HOME)