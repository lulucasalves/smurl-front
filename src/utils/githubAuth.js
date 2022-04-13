export function githubAuth() {
  const scope = 'https://github.com/login/oauth/authorize?client_id='
  const id = '6bad1d24f45824534fd2'

  const url = scope + id

  return url
}
