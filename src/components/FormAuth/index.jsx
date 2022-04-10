import { Formik } from 'formik'
import { useState } from 'react'
import { loginSchema } from '../../schemas/auth'
import { AuthInput } from '../AuthInput'
import { Button } from '../Button'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { EMAIL_AUTH } from '../../services/auth'
import { useMutation } from '@apollo/client'
import { Loading } from '../Loading'

export function FormAuth() {
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [hidePassword, setHidePassword] = useState(true)
  const [login] = useMutation(EMAIL_AUTH)

  async function loginUser({ password, email }) {
    setLoading(true)

    await login({ variables: { email, password } })
      .then((res) => console.log(res.data.login.token))
      .catch(() => setErrorMessage('Incorrect email or password'))

    setLoading(false)
  }

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
