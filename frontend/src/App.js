import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Login from './component/Login'
import Signup from './component/Signup'
import WelcomePage from './component/WelcomePage'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/home' component={WelcomePage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
