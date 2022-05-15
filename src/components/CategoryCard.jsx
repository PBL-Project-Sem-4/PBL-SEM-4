import React from 'react'
import './style.css'
function CategoryCard(props) {
  return (
    
          <div class="rectangle ">
            <a href={props.data.url}>
            <div class="rectangle_left image_hover">
                <img
                  class="gallery_image"
                  src={props.data.urlToImage}
                  alt="latest news"
                />
            </div>
           
              <div class="rectangle_text">
                <h6 class="rectangle_text1">Top news</h6>
                <h4 class="rectangle_text2">
                 {props.data.title}
                </h4>
                <h5 class="rectangle_text3">
                  Updated 5 mins ago
                </h5>
            </div>
            </a>
          </div>
    
  )
}

export default CategoryCard