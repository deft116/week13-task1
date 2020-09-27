import React from 'react'
import ReactMarkDown from 'react-markdown'
import { Link } from 'react-router-dom'

const TextOfReadme = ({ userName, readMe }) => {
  return (
    <div role="alert" className="flex flex-col justify-center items-center py-2">
      <div className="w-2/3 bg-teal-500 text-white font-bold rounded-t px-4 py-2">
        <p>ReadMe:</p>
        <Link to={`/${userName}`}>Назад</Link>
      </div>
      <div className="w-2/3 overflow-scroll border border-t-0 border-teal-500 rounded-b px-4 py-3 text-gray-700">
        <ReactMarkDown id="description">{readMe}</ReactMarkDown>
      </div>
    </div>
  )
}

TextOfReadme.propTypes = {}

export default React.memo(TextOfReadme)
