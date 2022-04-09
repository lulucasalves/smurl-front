import { AiOutlineLink } from 'react-icons/ai'

export function FirstTutorial() {
  return (
    <div className="firstTutorial">
      <input
        style={{ width: '270px' }}
        className="inputTutorial"
        value="https://socialoff.vercel.app/instagram?download"
        disabled
      />
      <AiOutlineLink className="linkIcon" />
    </div>
  )
}
