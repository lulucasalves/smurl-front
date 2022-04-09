import * as Yup from 'yup'

export const registerSchema = Yup.object().shape({
  email: Yup.string()
    .required('Insert an email address')
    .email('Invalid email'),
  password: Yup.string()
    .required('Insert your password')
    .min(6, 'Your password need min 6 characters')
})
