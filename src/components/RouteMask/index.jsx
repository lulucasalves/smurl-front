import MaskedInput from 'react-text-mask'

export function RouteMask(props) {
  return (
    <div className="inputGroup">
      <MaskedInput
        maxLength={26}
        guide={false}
        mask={[
          'smurl.ml/l/',
          /[a-zA-Z]/,
          /\b/,
          /\b/,
          /\b/,
          /\b/,
          /\b/,
          /\b/,
          /\b/,
          /\b/,
          /\b/,
          /\b/,
          /\b/,
          /\b/,
          /\b/,
          /\b/,
          /\b/,
          /\b/,
          /\b/,
          /\b/,
          /\b/,
          /\b/
        ]}
        {...props}
        className="authInput"
      />
      {props.icon}
    </div>
  )
}
