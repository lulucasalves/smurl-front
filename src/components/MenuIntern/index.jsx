import { Logo } from '../Logo'
import { ModalMenu } from '../ModalMenu'
import { RiMenu5Line } from 'react-icons/ri'
import { useState } from 'react'

export function MenuIntern() {
  const [state, setState] = useState(false)

  return (
    <>
      <ModalMenu state={state} setState={setState} />
      <div className="menuSystem">
        <Logo link="/" />
        <RiMenu5Line onClick={() => setState(true)} />
      </div>
    </>
  )
}
