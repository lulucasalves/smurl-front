import { useQuery } from '@apollo/client'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GET_URL } from '../services/urls'

export default function Redirect() {
  const { name } = useParams()

  const { data } = useQuery(GET_URL, { variables: { name } })

  useEffect(() => {
    if (data) {
      window.location.href = data.getUrl.link
    }
  }, [data])

  return <></>
}
