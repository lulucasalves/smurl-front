import { Formik } from 'formik'
import { useState } from 'react'
import { resetSchema } from '../../schemas/auth'
import { AuthInput } from '../AuthInput'
import { Button } from '../Button'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { Loading } from '../Loading'
import { useSearchParams } from 'react-router-dom'
import { RETURN_FORGOT_PASSWORD } from '../../services/user'
import { useMutation } from '@apollo/client'

export function FormReset() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({
    error: '',
    success: ''
  })
  const [returnForgotPassword] = useMutation(RETURN_FORGOT_PASSWORD)
  const [hidePassword, setHidePassword] = useState(true)
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')

  async function reset({ password }) {
    setLoading(true)

    await returnForgotPassword({
      variables: { newPassword: password, token }
    }).then((res) => {
      res.data.returnForgotPassword.error
        ? setMessage({ error: 'Invalid Params', success: '' })
        : setMessage({ success: 'Your password has been reset', error: '' })
    })

    setLoading(false)
  }

  return (
    <div className="loginForm">
      <p className="authTitle">Reset your password</p>
      <div className="titleForm">
        <p>Create a new password:</p>
        {message.error && (
          <p className="error">
            <span>! </span> {message.error}
          </p>
        )}

        {message.success && (
          <p className="success">
            <span>! </span> {message.success}
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
        validationSchema={resetSchema}
        onSubmit={(values) => {
          reset(values)
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
              onClick={() => {
                setMessage({ error: '', success: '' })
              }}
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
