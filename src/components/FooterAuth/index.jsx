import { Link } from 'react-router-dom'

export function FooterAuth() {
  return (
    <>
      <div className="line" style={{ margin: '20px 0' }} />
      <div className="optLinks">
        <Link to="/forgotPassword">
          <p>Forgot password?</p>
        </Link>
        <Link to="/signUp">
          <p>Sign Up</p>
        </Link>
      </div>
    </>
  )
}
