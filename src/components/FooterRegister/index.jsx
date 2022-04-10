import { Link } from 'react-router-dom'

export function FooterRegister() {
  return (
    <>
      <div className="line" style={{ margin: '20px 0' }} />
      <div className="registerLinks">
        <Link to="/signIn">
          <a>Sign In</a>
        </Link>
      </div>
    </>
  )
}
