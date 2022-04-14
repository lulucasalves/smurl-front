import { ButtonOutline } from '../ButtonOutline'
import { Logo } from '../Logo'
import { Link } from 'react-router-dom'
import { Button } from '../Button'

export function MenuExtern() {
  return (
    <div className="menuContainer">
      <Logo link="/" />

      <div>
        <Link to="/signIn" className="signInMenu">
          <ButtonOutline>Sign In</ButtonOutline>
        </Link>
        <Link to="/signUp">
          <ButtonOutline className="signUpMenu">Get Started</ButtonOutline>
        </Link>
      </div>
    </div>
  )
}
