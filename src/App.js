import React, { useEffect, useState } from 'react'
import Heading from './components/Heading'
import Footer from './components/Footer'
// import { NewsContextProvider } from './components/NewsContext'
import { Route, Switch } from 'react-router-dom'
// import { Component } from 'react'
import Home from './components/Home'
import request from './components/request'
import Category from './components/Category'
import Login from './components/Login'
import Signin from './components/Signin'
function App () {
  const [token, setToken] = useState(false)
  const [username, setUsername] = useState('')
  useEffect(() => {
    let uName = localStorage.getItem('Username')
    if (uName) {
      setToken(true)
      setUsername(uName)
    }
  }, [])
  return (
    <div>
      <Heading
        isLoggedin={token}
        Username={username}
        setToken={setToken}
        setUsername={setUsername}
      />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          path='/sports'
          component={() => <Category type={request.SportsNews} />}
        />
        <Route exact path='/login'>
          <Login setToken={setToken} setUsername={setUsername} />
        </Route>
        <Route exact path='/signin'>
          <Signin setToken={setToken} setUsername={setUsername} />
        </Route>
        <Route
          path='/lifestyle'
          component={() => <Category type={request.LifestyleNews} />}
        />
        <Route
          path='/business'
          component={() => <Category type={request.BusinessNews} />}
        />
        <Route
          path='/music'
          component={() => <Category type={request.MusicNews} />}
        />
        <Route
          path='/fasion'
          component={() => <Category type={request.FasionNews} />}
        />
      </Switch>

      <Footer />
    </div>
  )
}

export default App
