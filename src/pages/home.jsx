import { Footer } from '../components/Footer'
import { InitialContent } from '../components/InitialContent'
import { LastSession } from '../components/LastSession'
import { MenuExtern } from '../components/MenuExtern'
import { Tutorial } from '../components/Tutorial'

export default function Home() {
  return (
    <>
      <MenuExtern />
      <div className="container">
        <InitialContent />
        <div className="line" />
        <Tutorial />
        <div className="line" />
        <LastSession />
      </div>
      <Footer />
    </>
  )
}
