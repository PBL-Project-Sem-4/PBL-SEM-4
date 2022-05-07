import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import './style.css'
import axios from 'axios'
import request from './request'

function HeadNews() {
      const [data,setData]=useState();
   const apiKey="2c775f4e4c2a4c2590c3821a0b546db4";
useEffect(()=>{
   axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`
   ).then(response=>setData(response.data))
   .catch(error=>console(error))
     
},[])
// const news=data.articles[Math.floor(Math.random()*10)]
// console.log(news)


  return (
    <div class="gallery">
    <div class="left_gallery">
      <div class="left_top image_hover">
        <img
          class="gallery_image"
          src="https://c.ndtvimg.com/2022-04/73cj66e_raja-iqbal-singh_625x300_20_April_22.jpg"
          alt="latest news"
        />
        <div class="gallery_text">
          <h5 class="gallery_text1">Top news</h5>
          <h2 class="gallery_text2">
            Mayor On Why Bulldozers Kept Moving In Delhi's Jahangirpuri Even
            After Court Pause
          </h2>
        </div>
      </div>
      <div class="left_bottom image_hover">
        <img
          class="gallery_image"
          src="https://static.toiimg.com/thumb/msid-90954208,imgsize-1163270,width-400,resizemode-4/90954208.jpg"
          alt="latest news"
        />
        <div class="gallery_text">
          <h5 class="gallery_text1">Top news</h5>
          <h2 class="gallery_text2">
            Covid-19: Delhi makes wearing masks mandatory again, Rs 500 fine
            for violators
          </h2>
        </div>
      </div>
    </div>
    <div class="right_gallery">
      <div class="right_top">
        <div class="right_top_left image_hover">
          <img
            class="gallery_image"
            src="https://c.ndtvimg.com/2022-02/angj81s8_julian-assange_625x300_10_February_22.jpg"
            alt="latest news"
          />
          <div class="gallery_text">
            <h6 class="gallery_text1">Top news</h6>
            <h4 class="gallery_text2">
                UK Court Formally Issues Order To Extradite Julian Assange To US
            </h4>
          </div>
        </div>
        <div class="right_top_right image_hover">
            <img
            class="gallery_image"
            src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2022/04/edied-1100-1650432581.jpg"
            alt="latest news"
          />
          <div class="gallery_text">
            <h6 class="gallery_text1">Top news</h6>
            <h4 class="gallery_text2">
                Jahangirpuri LIVE: 'Turkman Gate 2022,' Owaisi blames BJP, AAP; stopped from visiting riot-hit area
            </h4>
        </div>
      </div>
      </div>
      <div class="right_bottom image_hover">
        <img
        class="gallery_image"
        src="https://c.ndtvimg.com/2022-04/tlc0d95g_ukraine-tank_625x300_20_April_22.jpg"
        alt="latest news"
      />
      <div class="gallery_text">
        <h5 class="gallery_text1">Top news</h5>
        <h2 class="gallery_text2">
            Ukraine Tank "Snipes" Russian Military Vehicle Through Building
        </h2>
      </div>
      </div>
    </div>
  </div>
  )
}

export default HeadNews