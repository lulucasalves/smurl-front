import { FcGoogle } from 'react-icons/fc'
import { BsFacebook, BsGithub } from 'react-icons/bs'
import { googleAuth } from '../../utils/googleAuth'
import { githubAuth } from '../../utils/githubAuth'
import { facebookAuth } from '../../utils/facebookAuth'

export function BrandAuth() {
  return (
    <div className="brandAuth">
      <p>or</p>
      <a
        href={googleAuth()}
        rel="noreferrer"
        target="_blank"
        className="brandButton"
      >
        <FcGoogle />
        <p>Continue with Google</p>
      </a>
      <a
        href={facebookAuth()}
        rel="noreferrer"
        target="_blank"
        className="brandButton"
      >
        <BsFacebook className="facebook" />
        <p>Continue with Facebook</p>
      </a>
      <a
        href={githubAuth()}
        rel="noreferrer"
        target="_blank"
        className="brandButton"
      >
        <BsGithub className="github" />
        <p>Continue with Github</p>
      </a>
    </div>
  )
}
