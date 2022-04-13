import queryString from 'query-string'

export function facebookAuth() {
  const stringifiedParams = queryString.stringify({
    client_id: '505575514434067',
    redirect_uri: 'https://smurl.ml/facebook',
    scope: 'email',
    response_type: 'code'
  })

  const facebookLoginUrl = `https://www.facebook.com/v4.0/dialog/oauth?${stringifiedParams}`

  return facebookLoginUrl
}
