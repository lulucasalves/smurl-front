export function AuthInput(props) {
  return (
    <div className="inputGroup">
      <input {...props} className="authInput" />
      {props.icon}
    </div>
  )
}
