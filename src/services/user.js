import { gql } from '@apollo/client'

export const GET_USER = gql`
  query {
    getUser {
      email
      phone
      confirmed
      number_urls
      created_at
    }
  }
`

export const REGISTER_USER = gql`
  mutation ($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      token
    }
  }
`

export const FORGOT_PASSWORD = gql`
  mutation ($email: String!) {
    forgotPassword(email: $email) {
      error
      message
    }
  }
`

export const RETURN_FORGOT_PASSWORD = gql`
  mutation ($token: String!, $newPassword: String!) {
    returnForgotPassword(token: $token, newPassword: $newPassword) {
      error
      message
    }
  }
`

export const CHANGE_PASSWORD = gql`
  mutation ($oldPassword: String!, $newPassword: String!) {
    changePassword(oldPassword: $oldPassword, newPassword: $newPassword) {
      error
      message
    }
  }
`

export const EDIT_USER = gql`
  mutation ($email: String!, $phone: String!) {
    editUser(email: $email, phone: $phone) {
      error
      message
    }
  }
`

export const DELETE_USER = gql`
  mutation {
    deleteUser {
      error
      message
    }
  }
`
