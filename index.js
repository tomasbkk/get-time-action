const core = require('@actions/core');
const dayjs = require('dayjs');

async function main() {
	try {
		const timezone = core.getInput('timeZone');// default: 8
		const formatStr = core.getInput('format');// default: YYYY-MM-DD-HH-mm-ss
		console.log('time zone', timezone)
		console.log('time format', formatStr)

		const str = dayjs().utcOffset(8).format(formatStr)
		console.log(str)

		core.setOutput("time", str);

	} catch (error) {
		core.setFailed(error.message);
		console.log('err ----> ', error)
	}
}

main();
