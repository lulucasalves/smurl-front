import { Formik } from 'formik'
import { useState } from 'react'
import { createRouteSchema } from '../../schemas/user-url'
import { AuthInput } from '../AuthInput'
import { Button } from '../Button'
import { Loading } from '../Loading'
import { useMutation } from '@apollo/client'
import { EDIT_URL } from '../../services/urls'
import { Label } from '../Label'
import { AiOutlineClose } from 'react-icons/ai'

export function ModalEditUrl(props) {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({
    error: '',
    success: ''
  })
  const [editUrl] = useMutation(EDIT_URL)

  async function create({ link, name }) {
    if (!loading) {
      setLoading(true)

      await editUrl({
        variables: { link, name, id: props.urlId }
      })
        .then((res) => {
          res.data.editUrl.error
            ? setMessage({
                error: 'This route name already exists',
                success: ''
              })
            : window.location.reload()
        })
        .finally(() => setLoading(false))
    }
  }

  return (
    <>
      {props.urlId && props.state ? (
        <div className="modalSystem">
          <div className="loginForm modalBody">
            <AiOutlineClose
              onClick={() => props.setState(false)}
              className="exit"
            />
            <div className="titleForm systemTitle" style={{ marginTop: '0' }}>
              <p>Edit your route:</p>
              {message.error && (
                <p className="error">
                  <span>! </span> {message.error}
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
                    <AuthInput
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
                    {loading ? <Loading /> : 'Continue'}
                  </Button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      ) : null}
    </>
  )
}
