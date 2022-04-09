import { Button } from '../Button'
import { AiOutlineCheckCircle } from 'react-icons/ai'

export function ThirdTutorial() {
  return (
    <div className="firstTutorial">
      <Button style={{ fontSize: '0.875rem' }} disabled>
        Shorter
      </Button>
      <AiOutlineCheckCircle className="linkIcon" />
    </div>
  )
}
