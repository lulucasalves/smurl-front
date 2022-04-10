import { ButtonOutline } from '../ButtonOutline'
import { Logo } from '../Logo'
import { Link } from 'react-router-dom'

export function MenuExtern() {
  return (
    <div className="menuContainer">
      <Logo link="/" />
      <Link to="/signUp">
        <ButtonOutline>Get Started</ButtonOutline>
      </Link>
    </div>
  )
}
