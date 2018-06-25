const childProcess = require('child_process');

module.exports = function (scriptPath, callback) {

	let process = childProcess.fork(scriptPath);

	return new Promise((resolve,reject)=>{
        process.on('error', function (err) {
            reject(err);
        });
        process.on('close', function (code) {
            if(code===0){
                resolve(true);
            }else{
                reject(new Error(`error on close code:${code}`));
            }
        });
    })


}