import { Formik } from 'formik'
import { useContext, useState } from 'react'
import { registerSchema } from '../../schemas/auth'
import { AuthInput } from '../AuthInput'
import { Button } from '../Button'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { REGISTER_USER } from '../../services/user'
import { useMutation } from '@apollo/client'
import { Loading } from '../Loading'
import { ContextProvider } from '../../store/Config'

export function FormRegister() {
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [hidePassword, setHidePassword] = useState(true)
  const [createUser] = useMutation(REGISTER_USER)
  const { signIn } = useContext(ContextProvider)

  async function register({ password, email }) {
    setLoading(true)

    await createUser({ variables: { email, password } })
      .then((res) => signIn(res.data.createUser.token))
      .catch(() => setErrorMessage('Already have an account using this email'))

    setLoading(false)
  }

  return (
    <div className="loginForm">
      <p className="authTitle">Create your account</p>
      <div className="titleForm">
        <p>Register with email:</p>
        {errorMessage && (
          <p className="error">
            <span>! </span> {errorMessage}
          </p>
        )}
      </div>
      <Formik
        initialValues={{
          email: '',
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
