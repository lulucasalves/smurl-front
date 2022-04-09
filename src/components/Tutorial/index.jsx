import { FirstTutorial } from '../FirstTutorial'
import { SecondTutorial } from '../SecondTutorial'
import { ThirdTutorial } from '../ThirdTutorial'

export function Tutorial() {
  return (
    <div id="tutorial" className="tutorialDiv">
      <h1 className="titleTutorial">How to use our tool?</h1>
      <p className="tutorialDescription">
        First you need to paste your link in the form.
      </p>
      <FirstTutorial />
      <div className="tutorialSep" />
      <p className="tutorialDescription">Choose the desired url name.</p>
      <SecondTutorial />
      <div className="tutorialSep" />
      <p className="tutorialDescription">
        Click in button "Shorter" and generate your url.
      </p>
      <ThirdTutorial />
    </div>
  )
}
