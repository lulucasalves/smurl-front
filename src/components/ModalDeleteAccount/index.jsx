import { Button } from '../Button'
import { ButtonOutline } from '../ButtonOutline'
import { useMutation } from '@apollo/client'
import { AiOutlineClose } from 'react-icons/ai'
import { DELETE_USER } from '../../services/user'
import { useState } from 'react'
import { Loading } from '../Loading'

export function ModalDeleteAccount(props) {
  const [deleteUser] = useMutation(DELETE_USER)
  const [loading, setLoading] = useState(false)

  async function deleteAccount() {
    if (!loading) {
      setLoading(true)

      await deleteUser()
        .then(() => {
          window.location.href = '/'
        })
        .finally(() => setLoading(false))
    }
  }

  return (
    <>
      {props.state ? (
        <div className="modalSystem lateralDelete">
          <div className="loginForm modalBody deleteModal">
            <AiOutlineClose
              onClick={() => props.setState(false)}
              className="exit"
            />
            <div className="titleForm" style={{ marginTop: '0' }}>
              <p>Delete your account</p>
            </div>
            <ButtonOutline onClick={() => deleteAccount()}>
              {loading ? <Loading /> : 'Delete'}
            </ButtonOutline>
            <Button onClick={() => props.setState(false)}>Return</Button>
          </div>
        </div>
      ) : null}
    </>
  )
}
