import { FirstTutorial } from '../FirstTutorial'
import { SecondTutorial } from '../SecondTutorial'
import { ThirdTutorial } from '../ThirdTutorial'

export function Tutorial() {
  return (
    <div className="tutorialDiv">
      <h1 className="titleTutorial">How to use our tool?</h1>
      <FirstTutorial />
      <p className="tutorialDescription">
        First you need to paste your link in the form.
      </p>
      <div className="tutorialSep" />
      <SecondTutorial />
      <p className="tutorialDescription">Choose the desired url name.</p>
      <div className="tutorialSep" />
      <ThirdTutorial />
      <p className="tutorialDescription">
        Click in button "Shorter" and generate your url.
      </p>
    </div>
  )
}
