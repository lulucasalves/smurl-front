export function Button(props) {
  return (
    <button className="button" {...props}>
      {props.children}
    </button>
  )
}
