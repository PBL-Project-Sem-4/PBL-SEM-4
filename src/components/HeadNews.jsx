import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import './style.css'
import axios from 'axios'
import request from './request'

function HeadNews() {

      const [data,setData]=useState();
   const apiKey="d1c18beac50342af94b68b463755ef3f";
useEffect(()=>{
   axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`
   ).then(response=>setData(response.data))
   .catch(error=>console.log(error))
     
},[])

console.log("data",data);


  return (
    <div className="gallery">
    <div className="left_gallery">
      <div className="left_top image_hover">
        <img
          className="gallery_image"
          src="https://cdn.cnn.com/cnnnext/dam/assets/220427214015-joe-biden-042722-super-tease.jpg"
          alt="latest news"
        />
        <div className="gallery_text">
          <h5 className="gallery_text1">Top news</h5>
          <h2 className="gallery_text2">
          {/* Biden will tout 'small business boom' in roundtable with business owners */}
          {/* {data[0].description} */}
          </h2>
        </div>
      </div>
      <div className="left_bottom image_hover">
        <img
          className="gallery_image"
          src="https://ichef.bbci.co.uk/news/1024/branded_news/13635/production/_124231497_gettyimages-1392501224.jpg"
          alt="latest news"
        />
        <div className="gallery_text">
          <h5 className="gallery_text1">Top news</h5>
          <h2 className="gallery_text2">
          Shanghai lockdown: European firms face 'logistical nightmare', says business group
          </h2>
        </div>
      </div>
    </div>
    <div className="right_gallery">
      <div className="right_top">
        <div className="right_top_left image_hover">
          <img
            className="gallery_image"
            src="https://c.ndtvimg.com/2022-02/angj81s8_julian-assange_625x300_10_February_22.jpg"
            alt="latest news"
          />
          <div className="gallery_text">
            <h6 className="gallery_text1">Top news</h6>
            <h4 className="gallery_text2">
                UK Court Formally Issues Order To Extradite Julian Assange To US
            </h4>
          </div>
        </div>
        <div className="right_top_right image_hover">
            <img
            className="gallery_image"
            src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2022/04/edied-1100-1650432581.jpg"
            alt="latest news"
          />
          <div className="gallery_text">
            <h6 className="gallery_text1">Top news</h6>
            <h4 className="gallery_text2">
                Jahangirpuri LIVE: 'Turkman Gate 2022,' Owaisi blames BJP, AAP; stopped from visiting riot-hit area
            </h4>
        </div>
      </div>
      </div>
      <div className="right_bottom image_hover">
        <img
        className="gallery_image"
        src="https://c.ndtvimg.com/2022-04/tlc0d95g_ukraine-tank_625x300_20_April_22.jpg"
        alt="latest news"
      />
      <div className="gallery_text">
        <h5 className="gallery_text1">Top news</h5>
        <h2 className="gallery_text2">
            Ukraine Tank "Snipes" Russian Military Vehicle Through Building
        </h2>
      </div>
      </div>
    </div>
  </div>
  )
}

export default HeadNews