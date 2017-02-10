import { browserHistory } from 'react-router'

const signUpUser = ( url, body ) => {
  event.preventDefault()
  fetch( url, {
    method: 'post',
    mode: 'cors',
    credentials: 'same-origin',
    body: JSON.stringify( body ),
    headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }).then( response => {
    console.log("new user created")
    browserHistory.push('/')
  })
  console.log(`Signing up new ${body.role}!`)
}

export { signUpUser }
