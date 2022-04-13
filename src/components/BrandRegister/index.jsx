import { FcGoogle } from 'react-icons/fc'
import { BsFacebook, BsGithub } from 'react-icons/bs'
import { googleAuth } from '../../utils/googleAuth'
import { githubAuth } from '../../utils/githubAuth'
import { facebookAuth } from '../../utils/facebookAuth'

export function BrandRegister() {
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
        <p>Register with Google</p>
      </a>
      <a
        href={facebookAuth()}
        rel="noreferrer"
        target="_blank"
        className="brandButton"
      >
        <BsFacebook className="facebook" />
        <p>Register with Facebook</p>
      </a>
      <a
        href={githubAuth()}
        rel="noreferrer"
        target="_blank"
        className="brandButton"
      >
        <BsGithub className="github" />
        <p>Register with Github</p>
      </a>
    </div>
  )
}
