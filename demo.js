const dayjs = require('dayjs')
const dayjsPluginUTC = require('dayjs/plugin/utc')

dayjs.extend(dayjsPluginUTC)

let a = dayjs().format('YYYY-MM-DD-HH-mm-ss')
console.log(a)
