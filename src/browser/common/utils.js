const moment = require('moment')

const toStandardDate = (date) => moment(date).format('MMMM DD YYYY')

export { toStandardDate }
