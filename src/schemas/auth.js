import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Insert an email address')
    .email('Invalid email'),
  password: Yup.string().required('Insert your password')
})

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().required('Insert an email address').email('Invalid email')
})

export const registerSchema = Yup.object().shape({
  email: Yup.string()
    .required('Insert an email address')
    .email('Invalid email'),
  password: Yup.string()
    .required('Insert your password')
    .min(6, 'Your password need min 6 characters'),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required('Confirm your password')
          .oneOf([Yup.ref('password')], 'Incorrect password')
      : field
  )
})
