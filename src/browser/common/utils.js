const moment = require('moment')

const toStandardDate = (date) => moment(date).format('MMMM DD YYYY')

const fetchURL = (url, options={}) => {
  const defaultOptions = {
    method: 'GET',
    mode: 'cors',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    credentials: 'same-origin'
  }
  if(options.body) {
    options.body = JSON.stringify(options.body)
  }
  return fetch(url, Object.assign(defaultOptions, options))
    .then( response => {
      return response.json()
    })
}

export { toStandardDate, fetchURL }
