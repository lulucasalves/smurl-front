import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { BiTrashAlt, BiEdit } from 'react-icons/bi'
import { GET_URLS } from '../../services/urls'
import { ModalEditUrl } from '../ModalEditUrl'

export function UrlTable(props) {
  const [urls, setUrls] = useState([])
  const { data } = useQuery(GET_URLS)

  useEffect(() => {
    if (data) {
      setUrls(data.getUrls)
    }
  }, [data])

  function edit(id) {
    props.setUrlId(id)
    props.setModal(true)
  }

  function deleteRoute(id) {
    props.setUrlId(id)
    props.setDeleteModal(true)
  }

  return (
    <>
      <h3 className="tableTitle">Your routes</h3>

      <p className="numberRoutes">
        Total: {props.user ? props.user.number_urls : 0}
      </p>
      <table className="urlTable">
        <thead>
          <tr>
            <th scope="col">Link</th>
            <th scope="col">Route</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        {urls.map(({ link, name, id }) => {
          return (
            <>
              {urls.length ? (
                <tbody key={id}>
                  <tr>
                    <td data-label="Link">
                      <a href={link} target="_blank">
                        {link}
                      </a>
                    </td>
                    <td data-label="Route">
                      <a target="_blank" href={name}>
                        {name}
                      </a>
                    </td>
                    <td data-label="Edit" className="iconsGroupTable">
                      <BiEdit onClick={() => edit(id)} />
                      <BiTrashAlt onClick={() => deleteRoute(id)} />
                    </td>
                  </tr>
                </tbody>
              ) : (
                <p className="nodata">No data</p>
              )}
            </>
          )
        })}
      </table>
    </>
  )
}
