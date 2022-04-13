import { BsPerson } from 'react-icons/bs'
import { Formik } from 'formik'
import { AuthInput } from '../AuthInput'
import { ButtonOutline } from '../ButtonOutline'
import { Loading } from '../Loading'
import { useMutation, useQuery } from '@apollo/client'
import { Label } from '../Label'
import { AiOutlineClose } from 'react-icons/ai'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { useContext, useState } from 'react'
import { changePasswordSchema, editUserSchema } from '../../schemas/user-url'
import { CHANGE_PASSWORD, EDIT_USER, GET_USER } from '../../services/user'
import { ContextProvider } from '../../store/Config'
import { ModalDeleteAccount } from '../ModalDeleteAccount'

export function ModalMenu(props) {
  const { data } = useQuery(GET_USER)
  const [editUser] = useMutation(EDIT_USER)
  const [changePassword] = useMutation(CHANGE_PASSWORD)
  const [hidePassword, setHidePassword] = useState(true)
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState(false)
  const user = data.getUser
  const { signOut, theme, changeTheme } = useContext(ContextProvider)

  async function editProfile({ email, phone }) {
    if (!loading) {
      setLoading(true)

      await editUser({
        variables: { email, phone }
      })
        .then((res) => {
          res.data.editUser.error
            ? alert('Invalid params')
            : window.location.reload()
        })
        .finally(() => setLoading(false))
    }
  }

  async function changeUserPassword({ newPassword, oldPassword }) {
    if (!loading) {
      setLoading(true)

      await changePassword({
        variables: { newPassword, oldPassword }
      })
        .then((res) => {
          res.data.changePassword.error
            ? alert('Wrong password')
            : window.location.reload()
        })
        .finally(() => setLoading(false))
    }
  }

  return (
    <>
      {props.state && (
        <div className="modalMenu">
          <ModalDeleteAccount state={modal} setState={setModal} />

          <AiOutlineClose
            onClick={() => props.setState(false)}
            className="exit"
          />

          {theme === 'dark' ? (
            <MdDarkMode
              onClick={() => {
                changeTheme()
                props.setState(false)
              }}
              className="theme"
            />
          ) : (
            <MdLightMode
              onClick={() => {
                changeTheme()
                props.setState(false)
              }}
              className="theme"
            />
          )}

          <div className="userProfile">
            <BsPerson />
          </div>

          <p className="email" title={user.email}>
            {user.email.length > 32
              ? `${user.email.substr(0, 29)}...`
              : user.email}
          </p>

          <Formik
            initialValues={{
              email: user.email,
              phone: user.phone
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validationSchema={editUserSchema}
            onSubmit={(values) => {
              editProfile(values)
            }}
          >
            {({ handleChange, values, errors, handleSubmit }) => (
              <form onSubmit={handleSubmit} className="menuForm">
                <p>Edit your profile</p>
                <div className="systemInput">
                  <Label>Email</Label>
                  <AuthInput
                    required
                    onChange={handleChange('email')}
                    name="email"
                    type="email"
                    value={values.email}
                    placeholder="Type a new email"
                  />
                  {errors.email && (
                    <p className="error">
                      <span>! </span> {errors.email}
                    </p>
                  )}
                </div>
                <div className="systemInput">
                  <Label>Phone</Label>
                  <AuthInput
                    required
                    onChange={handleChange('phone')}
                    name="phone"
                    type="text"
                    value={values.phone}
                    placeholder="Type your phone number"
                  />
                  {errors.phone && (
                    <p className="error">
                      <span>! </span> {errors.phone}
                    </p>
                  )}
                </div>
                <ButtonOutline
                  type="submit"
                  style={{
                    color: '#fff',
                    borderColor: '#fff',
                    width: '100%',
                    padding: '10px',
                    borderRadius: '3px',
                    marginTop: '20px'
                  }}
                >
                  {loading ? <Loading /> : 'Edit Profile'}
                </ButtonOutline>
              </form>
            )}
          </Formik>

          {user.password && (
            <div className="changePassword">
              <Formik
                initialValues={{
                  oldPassword: '',
                  newPassword: ''
                }}
                validateOnChange={false}
                validateOnBlur={false}
                validationSchema={changePasswordSchema}
                onSubmit={(values) => {
                  changeUserPassword(values)
                }}
              >
                {({ handleChange, values, errors, handleSubmit }) => (
                  <form onSubmit={handleSubmit} className="menuForm">
                    <p>Change your password</p>
                    <div className="systemInput">
                      <Label>Password</Label>
                      <AuthInput
                        required
                        onChange={handleChange('oldPassword')}
                        name="oldPassword"
                        type="password"
                        value={values.oldPassword}
                        placeholder="Type your current password"
                      />
                      {errors.oldPassword && (
                        <p className="error">
                          <span>! </span> {errors.oldPassword}
                        </p>
                      )}
                    </div>
                    <div className="systemInput">
                      <Label>New Password</Label>
                      <AuthInput
                        required
                        onChange={handleChange('newPassword')}
                        name="newPassword"
                        type={hidePassword ? 'password' : 'text'}
                        value={values.newPassword}
                        placeholder="Type your new password"
                        icon={
                          hidePassword ? (
                            <BsEyeSlash
                              onClick={() => setHidePassword(false)}
                            />
                          ) : (
                            <BsEye onClick={() => setHidePassword(true)} />
                          )
                        }
                      />
                      {errors.newPassword && (
                        <p className="error">
                          <span>! </span> {errors.newPassword}
                        </p>
                      )}
                    </div>
                    <ButtonOutline
                      type="submit"
                      style={{
                        color: '#fff',
                        borderColor: '#fff',
                        width: '100%',
                        padding: '10px',
                        borderRadius: '3px',
                        marginTop: '20px'
                      }}
                    >
                      {loading ? <Loading /> : 'Change password'}
                    </ButtonOutline>
                  </form>
                )}
              </Formik>
            </div>
          )}

          <div className="menuLine" />
          <div className="signOutButton">
            <ButtonOutline
              onClick={() => signOut()}
              type="button"
              style={{
                color: 'var(--primary)',
                backgroundColor: '#fff',
                width: '100%',
                padding: '10px',
                borderRadius: '3px'
              }}
            >
              {loading ? <Loading /> : 'Sign Out'}
            </ButtonOutline>

            <p onClick={() => setModal(true)}>Delete my account</p>
          </div>
        </div>
      )}
    </>
  )
}
