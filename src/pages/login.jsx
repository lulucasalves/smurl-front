import { BrandAuth } from '../components/BrandAuth'
import { FormAuth } from '../components/FormAuth'
import { Logo } from '../components/Logo'

export default function Login() {
  return (
    <div className="container" style={{ padding: '20px 30px 0 30px' }}>
      <Logo style={{ textAlign: 'center', fontSize: '2.5rem' }} />
      <FormAuth />
      <BrandAuth />
    </div>
  )
}
