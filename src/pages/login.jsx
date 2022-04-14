import { BrandAuth } from '../components/BrandAuth'
import { FooterAuth } from '../components/FooterAuth'
import { FormAuth } from '../components/FormAuth'
import { Logo } from '../components/Logo'

export default function Login() {
  document.title = 'Smurl | Login'

  return (
    <div className="container" style={{ padding: '20px 30px 0 30px' }}>
      <Logo style={{ textAlign: 'center', fontSize: '2.5rem' }} link="/" />{' '}
      <div className="tabletContainer">
        <FormAuth />
        <BrandAuth />
        <FooterAuth />
      </div>
    </div>
  )
}
