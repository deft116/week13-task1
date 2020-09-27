import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'

const ListOfRepos = ({ userName, repos, getReadMe }) => {
  return (
    <div role="alert" className="flex flex-col justify-center items-center py-2">
      <div className="w-1/3 bg-teal-500 text-white font-bold rounded-t px-4 py-2">
        <p id="repository-name">{userName}:</p>
        <Link to="/" id="go-back">
          Назад
        </Link>
      </div>
      <div className="w-1/3 border border-t-0 border-teal-500 rounded-b px-4 py-3 text-gray-700">
        {repos.map((item) => (
          <li key={uuidv4()}>
            <Link to={`/${userName}/${item}`} onClick={getReadMe}>
              {item}
            </Link>
          </li>
        ))}
      </div>
    </div>
  )
}

ListOfRepos.propTypes = {}

export default React.memo(ListOfRepos)
