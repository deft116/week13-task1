import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'

import Main from './main'
import ListOfRepos from './list-of-repos'
import TextOfReadme from './text-of-readme'

const App = () => {
  const [userName, setUserName] = useState('')
  const [repos, setRepos] = useState([])
  const [readMe, setReadMe] = useState()

  useEffect(() => {
    if (userName) {
      axios
        .get(`https://api.github.com/users/${userName}/repos`)
        .then((res) => res.data)
        .then((res) => res.map((it) => it.name))
        .then((res) => setRepos(res))
    }
    return () => {}
  }, [userName])

  const getReadMe = (event) => {
    const repo = event.target.textContent
    axios
      .get(`https://raw.githubusercontent.com/${userName}/${repo}/master/README.md`)
      .then((response) => setReadMe(response.data))
  }

  return (
    <div>
      <Route exact path="/" component={() => <Main setUserName={setUserName} />} />
      <Route
        exact
        path="/:username"
        component={() => <ListOfRepos userName={userName} repos={repos} getReadMe={getReadMe} />}
      />
      <Route
        exact
        path="/:username/:repositoryName"
        component={() => <TextOfReadme userName={userName} readMe={readMe} />}
      />
    </div>
  )
}

App.propTypes = {}

export default React.memo(App)
