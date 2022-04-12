import { Button } from '../Button'
import { ButtonOutline } from '../ButtonOutline'
import { useMutation } from '@apollo/client'
import { DELETE_URL } from '../../services/urls'
import { AiOutlineClose } from 'react-icons/ai'

export function ModalDeleteConfirm(props) {
  const [deleteUrl] = useMutation(DELETE_URL)

  async function deleteRoute() {
    await deleteUrl({
      variables: { id: props.urlId }
    }).then(() => {
      window.location.reload()
    })
  }

  return (
    <>
      {props.urlId && props.state ? (
        <div className="modalSystem">
          <div className="loginForm modalBody deleteModal">
            <AiOutlineClose
              onClick={() => props.setState(false)}
              className="exit"
            />
            <div className="titleForm" style={{ marginTop: '0' }}>
              <p>Delete this route</p>
            </div>
            <ButtonOutline onClick={() => deleteRoute()}>Delete</ButtonOutline>
            <Button onClick={() => props.setState(false)}>Return</Button>
          </div>
        </div>
      ) : null}
    </>
  )
}
