import { FcGoogle } from 'react-icons/fc'
import { BsFacebook, BsGithub } from 'react-icons/bs'

export function BrandRegister() {
  return (
    <div className="brandAuth">
      <p>or</p>
      <button className="brandButton">
        <FcGoogle />
        <p>Register with Google</p>
      </button>
      <button className="brandButton">
        <BsFacebook className="facebook" />
        <p>Register with Facebook</p>
      </button>
      <button className="brandButton">
        <BsGithub className="github" />
        <p>Register with Github</p>
      </button>
    </div>
  )
}
