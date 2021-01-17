import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { BookContainer } from './components/BookContainer'

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={BookContainer}/>
      </Switch>
    </Router>
  )
}

export default App