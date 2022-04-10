import { Formik } from 'formik'
import { useState } from 'react'
import { registerSchema } from '../../schemas/auth'
import { AuthInput } from '../AuthInput'
import { Button } from '../Button'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { Loading } from '../Loading'

export function FormReset() {
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [hidePassword, setHidePassword] = useState(true)

  function register({ password, email, confirmPassword }) {
    alert(password + email + confirmPassword)
  }

  return (
    <div className="loginForm">
      <p className="authTitle">Reset your password</p>
      <div className="titleForm">
        <p>Create a new password:</p>
        {errorMessage && (
          <p className="error">
            <span>! </span> {errorMessage}
          </p>
        )}
      </div>
      <Formik
        initialValues={{
          password: '',
          confirmPassword: ''
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={registerSchema}
        onSubmit={(values) => {
          register(values)
        }}
      >
        {({ handleChange, values, errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
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
            <div className="inputGroup">
              <AuthInput
                required
                onChange={handleChange('confirmPassword')}
                name="confirmPassword"
                type="password"
                value={values.confirmPassword}
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && (
                <p className="error">
                  <span>! </span> {errors.confirmPassword}
                </p>
              )}
            </div>
            <Button
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
