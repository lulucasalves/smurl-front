import { ButtonOutline } from '../ButtonOutline'
import { Button } from '../Button'
import { PrincipalIllustration } from '../PrincipalIllustration'
import { Title } from '../Title'
import { Link } from 'react-router-dom'

export function InitialContent() {
  return (
    <div className="initialContent">
      <PrincipalIllustration />
      <Title>Make your links shorter</Title>
      <p>
        Use our url shortener tools and make your links more reliable, pretty
        and practical. Sign In or sign Up to use that free tools!
      </p>
      <div className="buttonsInitials">
        <Link to="/signUp">
          <Button>Get Started</Button>
        </Link>
        <ButtonOutline>See More</ButtonOutline>
      </div>
    </div>
  )
}