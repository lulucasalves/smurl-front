import { ButtonOutline } from '../ButtonOutline'
import { Button } from '../Button'
import { PrincipalIllustration } from '../PrincipalIllustration'
import { Title } from '../Title'
import { Link } from 'react-router-dom'

export function InitialContent() {
  return (
    <div className="initialContent">
      <PrincipalIllustration />
      <div className="initialDescription" >
        <Title>Make your links more short, pretty and practical</Title>
        <p>
          Use our url shortener tools and make your links more reliable, pretty
          and practical. Sign In or sign Up to use our free tools!
        </p>
        <div className="buttonsInitials">
          <Link to="/signUp">
            <Button>Get Started</Button>
          </Link>
          <a href="#tutorial">
            <ButtonOutline>See More</ButtonOutline>
          </a>
        </div>
      </div>
    </div>
  )
}
