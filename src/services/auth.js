import { gql } from '@apollo/client'

export const GOOGLE_AUTH = gql`
  mutation ($code: String!) {
    googleLogin(code: $code) {
      token
    }
  }
`

export const FACEBOOK_AUTH = gql`
  mutation ($code: String!) {
    facebookLogin(code: $code) {
      token
    }
  }
`

export const GITHUB_AUTH = gql`
  mutation ($code: String!) {
    githubLogin(code: $code) {
      token
    }
  }
`

export const EMAIL_AUTH = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`