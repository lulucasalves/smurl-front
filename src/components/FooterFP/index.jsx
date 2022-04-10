import { Link } from 'react-router-dom'

export function FooterFP() {
  return (
    <>
      <div className="line" style={{ margin: '20px 0' }} />
      <div className="registerLinks">
        <Link to="/signIn">
          <a>Return to sign in page</a>
        </Link>
      </div>
    </>
  )
}
