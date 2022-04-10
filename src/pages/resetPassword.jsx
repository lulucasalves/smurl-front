import { Logo } from '../components/Logo'
import { FormReset } from '../components/FormReset'
import { FooterFP } from '../components/FooterFP'

export default function Register() {
  return (
    <div className="container" style={{ padding: '20px 30px 0 30px' }}>
      <Logo style={{ textAlign: 'center', fontSize: '2.5rem' }} link="/" />
      <FormReset />
      <FooterFP />
    </div>
  )
}
