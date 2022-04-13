import { Formik } from 'formik'
import { useState } from 'react'
import { createRouteSchema } from '../../schemas/user-url'
import { AuthInput } from '../AuthInput'
import { Button } from '../Button'
import { Loading } from '../Loading'
import { useMutation } from '@apollo/client'
import { CREATE_URL } from '../../services/urls'
import { Label } from '../Label'
import { RouteMask } from '../RouteMask'

export function FormSystem() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({
    error: '',
    success: ''
  })
  const [createUrl] = useMutation(CREATE_URL)

  async function create({ link, name }) {
    if (!loading) {
      setLoading(true)

      await createUrl({
        variables: { link, name }
      })
        .then((res) => {
          res.data.createUrl.error
            ? setMessage({ error: res.data.createUrl.message, success: '' })
            : window.location.reload()
        })
        .finally(() => setLoading(false))
    }
  }

  return (
    <div className="loginForm">
      <div className="titleForm systemTitle">
        <p>Create a new route:</p>
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
          link: '',
          name: ''
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={createRouteSchema}
        onSubmit={(values) => {
          create(values)
        }}
      >
        {({ handleChange, values, errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="systemInput">
              <Label>Address</Label>
              <AuthInput
                required
                onChange={handleChange('link')}
                name="link"
                type="text"
                value={values.link}
                placeholder="Type your url"
              />
              {errors.link && (
                <p className="error">
                  <span>! </span> {errors.link}
                </p>
              )}
            </div>
            <div className="systemInput">
              <Label>Route name</Label>
              <RouteMask
                required
                onChange={handleChange('name')}
                name="name"
                type="text"
                value={values.name}
                placeholder="Type route name"
              />
              {errors.name && (
                <p className="error">
                  <span>! </span> {errors.name}
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
                marginTop: '20px'
              }}
            >
              {loading ? <Loading /> : 'Create'}
            </Button>
          </form>
        )}
      </Formik>
    </div>
  )
}
