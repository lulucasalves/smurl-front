import { useMutation } from '@apollo/client'
import { useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { GITHUB_AUTH } from '../services/auth'
import { ContextProvider } from '../store/Config'

export default function Github() {
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')
  const { setToken } = useContext(ContextProvider)

  const [githubLogin] = useMutation(GITHUB_AUTH)

  async function githubAuth() {
    await githubLogin({ variables: { code } }).then((res) => {
      setToken(res.data.githubLogin.token)
      window.location.href = '/system'
    })
  }

  useEffect(() => {
    if (code) {
      githubAuth()
    }
  }, [code])

  return <></>
}
