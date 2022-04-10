import { Link } from 'react-router-dom'

export function FooterAuth() {
  return (
    <>
      <div className="line" style={{ margin: '20px 0' }} />
      <div className="optLinks">
        <Link to="/forgotPassword">
          <a>Forgot password?</a>
        </Link>
        <Link to="/signUp">
          <a>Sign Up</a>
        </Link>
      </div>
    </>
  )
}
