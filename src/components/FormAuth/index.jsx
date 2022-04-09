import { Formik } from 'formik'
import { useState } from 'react'
import { registerSchema } from '../../schemas/auth'
import { AuthInput } from '../AuthInput'
import { Button } from '../Button'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

export function FormAuth() {
  const [errorMessage, setErrorMessage] = useState('')
  const [hidePassword, setHidePassword] = useState(true)

  function login({ password, email }) {
    alert(password + email)
  }

  return (
    <div className="loginForm">
      <p className="authTitle">Create your account</p>
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
        validationSchema={registerSchema}
        onSubmit={(values) => {
          login(values)
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
              type="submit"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '3px',
                marginTop: '40px'
              }}
            >
              Continue
            </Button>
          </form>
        )}
      </Formik>
    </div>
  )
}
