import React from 'react'
import Heading from './Heading'
import Footer from './Footer'
import { NewsContextProvider } from './NewsContext'
import {Route , Switch} from "react-router-dom"
import { Component } from 'react'
import Home from './Home'
import request from './request'
import Category from './Category'

function App() {
  return (
    <div>
      <Heading />
      
       <Switch>
       
         <Route exact path='/' component={Home} />
         <Route  path='/sports' component={() => <Category type={request.SportsNews} />}/>
         <Route  path='/lifestyle' component={() => <Category type={request.LifestyleNews} />}/>
         <Route  path='/business' component={() => <Category type={request.BusinessNews} />}/>
         <Route  path='/music' component={() => <Category type={request.MusicNews} />}/>
         <Route  path='/fasion' component={() => <Category type={request.FasionNews} />}/>
       </Switch>
    
      <Footer />
    </div>
  )
}

export default App