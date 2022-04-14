import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { BiTrashAlt, BiEdit } from 'react-icons/bi'
import { MdContentCopy } from 'react-icons/md'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { GET_URLS } from '../../services/urls'

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
            <th scope="col" className="editGroupForm">
              Edit
            </th>
          </tr>
        </thead>
        {urls.map(({ link, name, id }) => {
          return (
            <>
              {urls.length ? (
                <tbody>
                  <tr>
                    <td data-label="Link">
                      <a
                        key={name}
                        title={link}
                        href={link}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {link.length > 18 ? `${link.substr(0, 17)}...` : link}
                      </a>
                    </td>
                    <td data-label="Route">
                      <a
                        key={name}
                        title={name}
                        rel="noreferrer"
                        target="_blank"
                        href={`https://${name}`}
                      >
                        {name}
                      </a>
                    </td>
                    <td
                      data-label="Edit"
                      className="iconsGroupTable editGroupForm"
                    >
                      <CopyToClipboard text={`https://${name}`}>
                        <MdContentCopy />
                      </CopyToClipboard>
                      <BiEdit onClick={() => edit(id)} />
                      <BiTrashAlt onClick={() => deleteRoute(id)} />
                    </td>
                  </tr>
                </tbody>
              ) : null}
            </>
          )
        })}
      </table>
    </>
  )
}
