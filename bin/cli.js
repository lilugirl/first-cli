#! /usr/bin/env node 

var argv = process.argv;
argv.shift();
console.log('process.argv',process.argv);
console.log('argv',argv);

var file_path = __dirname;
var current_path=process.cwd();
console.log('__dirname',__dirname);
console.log('process.cwd()',process.cwd());

for(var i in argv){
    var _argv=argv[i];
    if(_argv=='-h' || _argv == '--help'){
        console.log('this is help info')
    }
}
