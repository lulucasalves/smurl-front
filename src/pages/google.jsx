import { useMutation } from '@apollo/client'
import { useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { GOOGLE_AUTH } from '../services/auth'
import { ContextProvider } from '../store/Config'

export default function Google() {
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')
  const { setToken } = useContext(ContextProvider)


  
  const [googleLogin] = useMutation(GOOGLE_AUTH)

  async function googleAuth() {
    await googleLogin({ variables: { code } }).then((res) => {
      setToken(res.data.googleLogin.token)
      window.location.href = '/system'
    })
  }

  useEffect(() => {
    if (code) {
      googleAuth()
    }
  }, [])

  return <></>
}
