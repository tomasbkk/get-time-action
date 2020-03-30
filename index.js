const core = require('@actions/core');
const dayjs = require('dayjs');

async function main() {
	try {
		const timezone = core.getInput('timeZone');//目标时区时间，默认东八区
		console.log('time zone', timezone)
		const str = dayjs().format("YYYY-MM-DD-HH-mm-ss")
		console.log(str)
		core.setOutput("time", str);

	} catch (error) {
		core.setFailed(error.message);
		console.log('err ----> ', error)
	}
}

main();
