import React from 'react'
import { NewsContextProvider } from './NewsContext'
import Row from './Row'
import './style.css'
import request from './request'

function News() {
  return (
    <div>
    <div class="shortnews_container_text"><b> Latest news</b></div>   
      <NewsContextProvider>
      <Row type={request.BusinessNews}/>
      <Row type={request.FasionNews}/>
      <Row type={request.GeneralNews}/>
      <Row type={request.LifestyleNews}/>
      <Row type={request.MusicNews}/>
      <Row type={request.SportsNews}/>
      </NewsContextProvider>
    </div>
  )
}

export default News