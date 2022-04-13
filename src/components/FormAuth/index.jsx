import { Formik } from 'formik'
import { useContext, useEffect, useState } from 'react'
import { loginSchema } from '../../schemas/user-url'
import { AuthInput } from '../AuthInput'
import { Button } from '../Button'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { EMAIL_AUTH } from '../../services/auth'
import { useMutation } from '@apollo/client'
import { Loading } from '../Loading'
import { ContextProvider } from '../../store/Config'

export function FormAuth() {
  const { setToken, user } = useContext(ContextProvider)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [hidePassword, setHidePassword] = useState(true)
  const [login] = useMutation(EMAIL_AUTH)

  async function loginUser({ password, email }) {
    if (!loading) {
      setLoading(true)

      await login({ variables: { email, password } })
        .then((res) => {
          setToken(res.data.login.token)
          window.location.href = '/system'
        })
        .catch(() => setErrorMessage('Incorrect email or password'))
        .finally(() => setLoading(false))
    }
  }

  useEffect(() => {
    if (user) {
      window.location.pathname = '/system'
    }
  }, [user])

  return (
    <div className="loginForm">
      <p className="authTitle">Enter in the system</p>
      <div className="titleForm">
        <p>Continue with email:</p>
        {errorMessage && (
          <p className="error">
            <span>! </span> {errorMessage}
          </p>
        )}
      </div>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          loginUser(values)
        }}
      >
        {({ handleChange, values, errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="inputGroup">
              <AuthInput
                required
                onChange={handleChange('email')}
                name="email"
                type="email"
                value={values.email}
                placeholder="Type your email"
              />
              {errors.email && (
                <p className="error">
                  <span>! </span> {errors.email}
                </p>
              )}
            </div>
            <div className="inputGroup">
              <AuthInput
                required
                onChange={handleChange('password')}
                name="password"
                type={hidePassword ? 'password' : 'text'}
                value={values.password}
                placeholder="Type your password"
                icon={
                  hidePassword ? (
                    <BsEyeSlash onClick={() => setHidePassword(false)} />
                  ) : (
                    <BsEye onClick={() => setHidePassword(true)} />
                  )
                }
              />
              {errors.password && (
                <p className="error">
                  <span>! </span> {errors.password}
                </p>
              )}
            </div>
            <Button
              onClick={() => setErrorMessage('')}
              type="submit"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '3px',
                marginTop: '30px'
              }}
            >
              {loading ? <Loading /> : 'Continue'}
            </Button>
          </form>
        )}
      </Formik>
    </div>
  )
}
