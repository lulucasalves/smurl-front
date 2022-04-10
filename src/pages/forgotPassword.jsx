import { FooterFP } from '../components/FooterFP'
import { FormFP } from '../components/FormFP'
import { Logo } from '../components/Logo'

export default function ForgotPassword() {
  return (
    <div className="container" style={{ padding: '20px 30px 0 30px' }}>
      <Logo style={{ textAlign: 'center', fontSize: '2.5rem' }} link="/" />
      <FormFP />
      <FooterFP />
    </div>
  )
}
