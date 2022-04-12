import { useContext, useState } from 'react'
import { FormSystem } from '../components/FormSystem'
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

  return (
    <>
      <ModalEditUrl urlId={urlId} state={modal} setState={setModal} />
      <ModalDeleteConfirm
        urlId={urlId}
        state={deleteModal}
        setState={setDeleteModal}
      />

      <MenuIntern user={user} />
      <div className="container">
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
  )
}
