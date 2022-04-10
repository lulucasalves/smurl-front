import { Formik } from 'formik'
import { useState } from 'react'
import { forgotPasswordSchema } from '../../schemas/auth'
import { AuthInput } from '../AuthInput'
import { Button } from '../Button'
import { FORGOT_PASSWORD } from '../../services/user'
import { useMutation } from '@apollo/client'
import { Loading } from '../Loading'

export function FormFP() {
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [forgotPassword] = useMutation(FORGOT_PASSWORD)

  async function send({ email }) {
    setLoading(true)

    await forgotPassword({ variables: { email } }).then((res) => {
      res.data.forgotPassword.error
        ? setErrorMessage('This email is not registered')
        : setSuccessMessage(`Email sended`)
    })

    setLoading(false)
  }

  return (
    <div className="loginForm">
      <p className="authTitle">Forgot your password?</p>
      <div className="titleForm">
        <p>We'll send a link to reset your password</p>
        {errorMessage && (
          <p className="error">
            <span>! </span> {errorMessage}
          </p>
        )}

        {successMessage && (
          <p className="success">
            <span>! </span> {successMessage}
          </p>
        )}
      </div>
      <Formik
        initialValues={{
          email: ''
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={forgotPasswordSchema}
        onSubmit={(values) => {
          send(values)
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
            <Button
              onClick={() => {
                setErrorMessage('')
                setSuccessMessage('')
              }}
              type="submit"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '3px',
                marginTop: '30px'
              }}
            >
              {loading ? <Loading /> : 'Reset your password'}
            </Button>
          </form>
        )}
      </Formik>
    </div>
  )
}
