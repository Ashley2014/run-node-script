const childProcess = require('child_process');

module.exports = async function (scriptPath, callback) {

	// keep track of whether callback has been invoked to prevent multiple invocations
	let invoked = false;

	let process = childProcess.fork(scriptPath);

	// listen for errors as they may prevent the exit event from firing
	process.on('error', function (err) {
		if (invoked) return true;
		invoked = true;
		return Promise.reject(err);
	});

	// execute the callback once the process has finished running
	process.on('exit', function (code) {
		if (invoked) return true;
		invoked = true;
		let err = code === 0 ? null : new Error('exit code ' + code);
		return Promise.reject(err);
	});

}