import { BrandRegister } from '../components/BrandRegister'
import { Logo } from '../components/Logo'
import { FormRegister } from '../components/FormRegister'
import { FooterRegister } from '../components/FooterRegister'

export default function Register() {
  document.title = 'Smurl | Register'

  return (
    <div className="container" style={{ padding: '20px 30px 0 30px' }}>
      <Logo style={{ textAlign: 'center', fontSize: '2.5rem' }} link="/" />
      <div className="tabletContainer">
        <FormRegister />
        <BrandRegister />
        <FooterRegister />
      </div>
    </div>
  )
}
