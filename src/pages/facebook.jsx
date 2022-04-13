import { useMutation } from '@apollo/client'
import { useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FACEBOOK_AUTH } from '../services/auth'
import { ContextProvider } from '../store/Config'

export default function Facebook() {
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')
  const { setToken } = useContext(ContextProvider)

  const [facebookLogin] = useMutation(FACEBOOK_AUTH)

  async function facebookAuth() {
    await facebookLogin({ variables: { code } }).then((res) => {
      if (res.data.facebookLogin.token) {
        setToken(res.data.facebookLogin.token)
        window.location.href = '/system'
      } else {
        window.location.href = '/'
      }
    })
  }

  useEffect(() => {
    if (code) {
      facebookAuth()
    }
  }, [code])

  return <></>
}
