import { Button } from '../Button'

export function ThirdTutorial() {
  return (
    <div className="firstTutorial">
      <Button style={{ fontSize: '0.875rem' }} disabled>
        Shorter
      </Button>
      <img alt="link icon" className="linkIcon" src="./check.svg" />
    </div>
  )
}
