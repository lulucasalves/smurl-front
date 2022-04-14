import { Button } from '../Button'
import { Link } from 'react-router-dom'

export function LastSession() {
  return (
    <div className="lastSessionDiv">
      <img className="dUrl" alt="3d url" src="./3dLink.webp" />
      <div>
        <p>
          This site has the objective of helping everybody that needs stylize
          some urls, when you enter in the system you can create max 10 links in
          your account, enjoy this free site.
        </p>
        <Link to="/signUp">
          <Button>Get Started for Free</Button>
        </Link>
      </div>
    </div>
  )
}
