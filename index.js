const core = require('@actions/core');
const dayjs = require('dayjs');

async function main() {
	try {
		// current time 加到东8区
		const timezone = core.getInput('timeZone');//目标时区时间，默认东八区
		console.log('time zone', timezone)
		core.setOutput("time", dayjs().format("YYYY-MM-DD-HH-mm-ss"));

	} catch (error) {
		core.setFailed(error.message);
		console.log('err ----> ', error)
	}
}

main();
