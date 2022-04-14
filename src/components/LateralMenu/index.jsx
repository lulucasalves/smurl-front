import { BsPerson } from 'react-icons/bs'
import { ButtonOutline } from '../ButtonOutline'
import { useQuery } from '@apollo/client'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { useContext, useState } from 'react'
import { GET_USER } from '../../services/user'
import { ContextProvider } from '../../store/Config'
import { LateralEdit } from '../LateralEdit'

export function LateralMenu() {
  const { data } = useQuery(GET_USER)
  const user = data.getUser
  const [edit, setEdit] = useState(false)
  const { signOut, theme, changeTheme } = useContext(ContextProvider)

  return (
    <>
      {edit ? (
        <LateralEdit setEdit={setEdit} />
      ) : (
        <div className="lateralMenu">
          {theme !== 'dark' ? (
            <MdDarkMode
              onClick={() => {
                changeTheme()
              }}
              className="theme"
            />
          ) : (
            <MdLightMode
              onClick={() => {
                changeTheme()
              }}
              className="theme"
            />
          )}

          <div className="userProfile">
            <BsPerson />
          </div>

          <p className="email" title={user.email}>
            {user.email.length > 29
              ? `${user.email.substr(0, 28)}...`
              : user.email}
          </p>

          <p className="number" title={user.phone}>
            {user.phone.length > 19
              ? `${user.phone.substr(0, 18)}...`
              : user.phone}
          </p>

          <div className="buttonEditDiv">
            <ButtonOutline
              onClick={() => setEdit(true)}
              type="button"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '3px',
                marginTop: '30px'
              }}
            >
              Edit Profile
            </ButtonOutline>
          </div>

          <div className="menuLine" />

          <div className="signOutButton">
            <ButtonOutline
              onClick={() => signOut()}
              type="button"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '3px'
              }}
            >
              Sign Out
            </ButtonOutline>
          </div>
        </div>
      )}
    </>
  )
}
