import { browserHistory } from 'react-router'

const signUpUser = ( url, userParams ) => {
  fetch( url, {
    method: 'post',
    mode: 'cors',
    credentials: 'same-origin',
    body: JSON.stringify( userParams ),
    headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }).then( response => {
    console.log("new user created")
    browserHistory.push('/')
  })
  console.log(`Signing up new ${userParams.role}!`)
}

export { signUpUser }
