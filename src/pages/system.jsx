import { useContext, useEffect, useState } from 'react'
import { FormSystem } from '../components/FormSystem'
import { LateralMenu } from '../components/LateralMenu'
import { MenuIntern } from '../components/MenuIntern'
import { ModalDeleteConfirm } from '../components/ModalDeleteConfirm'
import { ModalEditUrl } from '../components/ModalEditUrl'
import { UrlTable } from '../components/UrlTable'
import { ContextProvider } from '../store/Config'

export default function System() {
  const { user } = useContext(ContextProvider)
  const [urlId, seUrlId] = useState('')
  const [modal, setModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const token = localStorage.getItem('token')

  document.title = 'Smurl | System'

  useEffect(() => {
    if (!user && !token) {
      window.location.href = '/'
    }
  }, [user, token])

  return (
    <>
      {user && token && (
        <>
          <ModalEditUrl urlId={urlId} state={modal} setState={setModal} />
          <ModalDeleteConfirm
            urlId={urlId}
            state={deleteModal}
            setState={setDeleteModal}
          />

          {window.innerWidth > 1080 ? <LateralMenu /> : null}

          <MenuIntern user={user} />
          <div className="container containerIntern">
            <FormSystem />
            <div className="line" />
            <UrlTable
              setDeleteModal={setDeleteModal}
              setUrlId={seUrlId}
              user={user}
              setModal={setModal}
            />
          </div>
        </>
      )}
    </>
  )
}
