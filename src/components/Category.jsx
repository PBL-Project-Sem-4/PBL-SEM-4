import React, { useEffect, useState } from "react";
import { useContext } from "react";
import Cards from "./Cards";
import "./category.css";
import axios from "../axios";
import { NewsContext } from "./NewsContext";
import CategoryCard from "./CategoryCard";
function Category(props) {
  const [data, setData] = useState();
  const apiKey = "2c775f4e4c2a4c2590c3821a0b546db4";
  useEffect(() => {
    axios
      .get(`${props.type}`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
    console.log(data);
  }, []);

  return (
    <div>
      <div className="cat_gallery">
        <a href="#">
          <div className="top image_hover">
            <img
              className="cat_gallery_image"
              src="https://static.toiimg.com/thumb/resizemode-4,msid-91139289,width-800,height-450,ver-75/91139289.jpg"
              alt="latest news"
            />
            <div className="cat_gallery_text">
              <h5 className="cat_gallery_text1">Top news</h5>
              <h2 className="cat_gallery_text2">
                Xiaomi Pad 5 buying guide: 10 things to know about company’s
                first tablet in India
              </h2>
            </div>
          </div>
        </a>
        <div className="bottom">
          <div className="bottom_left image_hover">
            <a href="#">
              <img
                className="gallery_image"
                src="https://c.ndtvimg.com/2022-02/angj81s8_julian-assange_625x300_10_February_22.jpg"
                alt="latest news"
              />
              <div className="gallery_text">
                <h6 className="gallery_text1">Top news</h6>
                <h4 className="gallery_text2">
                  UK Court Formally Issues Order To Extradite Julian Assange To
                  US
                </h4>
              </div>
            </a>
          </div>

          <div className="bottom_right image_hover bg-light">
            <a href="#">
              <img
                className="gallery_image"
                src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2022/04/edied-1100-1650432581.jpg"
                alt="latest news"
              />
              <div className="gallery_text">
                <h6 className="gallery_text1">Top news</h6>
                <h4 className="gallery_text2">
                  Jahangirpuri LIVE: 'Turkman Gate 2022,' Owaisi blames BJP,
                  AAP; stopped from visiting riot-hit area
                </h4>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="manydiv">
        {data
          ? data.articles.map((news) => (
              <CategoryCard data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default Category;
