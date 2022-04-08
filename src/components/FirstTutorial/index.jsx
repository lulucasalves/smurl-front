export function FirstTutorial() {
  return (
    <div className="firstTutorial">
      <input
      style={{width: "270px"}}
        className="inputTutorial"
        value="https://socialoff.vercel.app/instagram?download"
        disabled
      />
      <img alt="link icon" className="linkIcon" src="./link.svg" />
    </div>
  )
}
