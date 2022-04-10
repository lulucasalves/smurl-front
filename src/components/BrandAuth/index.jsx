import { FcGoogle } from 'react-icons/fc'
import { BsFacebook, BsGithub } from 'react-icons/bs'

export function BrandAuth() {
  return (
    <div className="brandAuth">
      <p>or</p>
      <button className="brandButton">
        <FcGoogle />
        <p>Continue with Google</p>
      </button>
      <button className="brandButton">
        <BsFacebook className="facebook" />
        <p>Continue with Facebook</p>
      </button>
      <button className="brandButton">
        <BsGithub className="github" />
        <p>Continue with Github</p>
      </button>
    </div>
  )
}
