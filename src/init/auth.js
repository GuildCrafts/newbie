import { addUserToRequestFromJWT } from '@learnersguild/idm-jwt-auth/lib/middlewares'
import { parseConfig } from '../config/config'

const initialize = app => {
  if ( !process.env.JWT_PUBLIC_KEY ) {
    throw new Error(`You do not have a JWT_PUBLIC_KEY in your .env. Please add it.`)
  }
  app.use( addUserToRequestFromJWT )
  app.use( ensureUserLoggedIn )
}

const ensureUserLoggedIn = (req, res, next) => {

  const config = parseConfig(),
    redirect = encodeURIComponent(config.redirect_url)

  if ( !req.user ) {
    return res.redirect(`${config.idm_url}/sign-in?redirect=${redirect}`)
  }
  next()
}

export default initialize
