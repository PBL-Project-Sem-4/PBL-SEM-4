import  React, { useEffect} from "react";
import { useState } from "react";
import { useContext } from "react";
import Cards from "./Cards";
import "./style.css";
import axios from "../axios";
import { NewsContext } from "./NewsContext";

function Row(props) {
  //  const {data} = useContext(NewsContext);
  //  console.log(data);
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
    <div class="shortnews row my-4">
      {data
        ? data.articles.map((news) => <Cards data={news} key={news.url} />)
        : "Loading"}

      {/* <Cards
        links="https://c.ndtvimg.com/2022-02/4laf8a_deepak-chahar-bcci_625x300_20_February_22.jpg?im=FeatureCrop,algorithm=dnn,width=240,height=180"
        source="https://sports.ndtv.com/cricket/india-vs-sri-lanka-hamstring-injury-rules-deepak-chahar-out-of-sl-t20is-says-report-2783208"
        title="India vs Sri Lanka: Hamstring Injury Rules Deepak Chahar Out Of SL T20Is, Says Report"
      />
        <Cards 
        links="https://c.ndtvimg.com/2022-02/4laf8a_deepak-chahar-bcci_625x300_20_February_22.jpg?im=FeatureCrop,algorithm=dnn,width=240,height=180"
        source="https://sports.ndtv.com/cricket/india-vs-sri-lanka-hamstring-injury-rules-deepak-chahar-out-of-sl-t20is-says-report-2783208"
        title="India vs Sri Lanka: Hamstring Injury Rules Deepak Chahar Out Of SL T20Is, Says Report"
      />
        <Cards 
        links="https://c.ndtvimg.com/2022-02/4laf8a_deepak-chahar-bcci_625x300_20_February_22.jpg?im=FeatureCrop,algorithm=dnn,width=240,height=180"
        source="https://sports.ndtv.com/cricket/india-vs-sri-lanka-hamstring-injury-rules-deepak-chahar-out-of-sl-t20is-says-report-2783208"
        title="India vs Sri Lanka: Hamstring Injury Rules Deepak Chahar Out Of SL T20Is, Says Report"
      />
        <Cards 
        links="https://c.ndtvimg.com/2022-02/4laf8a_deepak-chahar-bcci_625x300_20_February_22.jpg?im=FeatureCrop,algorithm=dnn,width=240,height=180"
        source="https://sports.ndtv.com/cricket/india-vs-sri-lanka-hamstring-injury-rules-deepak-chahar-out-of-sl-t20is-says-report-2783208"
        title="India vs Sri Lanka: Hamstring Injury Rules Deepak Chahar Out Of SL T20Is, Says Report"
      />
       */}
    </div>
  );
}

export default Row;
