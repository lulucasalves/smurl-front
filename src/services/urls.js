import { gql } from '@apollo/client'

export const GET_URLS = gql`
  query {
    getUrls {
      name
      link
      id
    }
  }
`

export const GET_URL = gql`
  query ($name: String!) {
    getUrl(name: $name) {
      link
    }
  }
`

export const CREATE_URL = gql`
  mutation ($name: String!, $link: String!) {
    createUrl(name: $name, link: $link) {
      error
      message
    }
  }
`

export const EDIT_URL = gql`
  mutation ($name: String!, $link: String!, $id: String!) {
    editUrl(name: $name, link: $link, id: $id) {
      error
      message
    }
  }
`

export const DELETE_URL = gql`
  mutation ($id: String!) {
    deleteUrl(id: $id) {
      error
      message
    }
  }
`
