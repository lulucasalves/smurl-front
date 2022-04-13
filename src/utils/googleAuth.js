import queryString from 'query-string'

export function googleAuth() {
  const stringifiedParams = queryString.stringify({
    client_id:
      '335515854068-rvno823ke8nn6tcjnsbi22el62dspanu.apps.googleusercontent.com',
    redirect_uri: 'https://smurl.ml/google',
    scope: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile'
    ].join(' '),
    response_type: 'code'
  })

  const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`

  return googleLoginUrl
}
