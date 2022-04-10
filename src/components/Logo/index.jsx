import { Link } from 'react-router-dom'

export function Logo(props) {
  return (
    <Link to={props.link}>
      <h2 {...props} className="logo">
        smurl
      </h2>
    </Link>
  )
}
