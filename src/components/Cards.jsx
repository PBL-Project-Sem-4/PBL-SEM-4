import React from 'react'
import './style.css'
import request from './request'

function Cards(props) {
  return (
    
    // <h1>{props.data.title}</h1>
        <div class="usershortnews card col-lg-3 col-md-6" style={{width:'18rem'}}>
      <img
        src={props.data.urlToImage}
        class="card-img-top cardimages"
        alt="..."
      />
      <div class="card-body">
        <p class="card-text">
         <a href={props.data.url} class="anchorclass" target="blank"> 
          {props.data.title}</a>
        </p>
      </div>
    </div>
  )
}

export default Cards