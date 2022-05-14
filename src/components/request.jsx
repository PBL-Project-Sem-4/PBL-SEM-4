const apiKey=`4393d8addcc1471ea48003431e0de3c4`;
const request={
    GeneralNews:`https://newsapi.org/v2/everything?apiKey=${apiKey}&language=en&q=general`,
    SportsNews:`https://newsapi.org/v2/everything?apiKey=${apiKey}&language=en&q=sports`,
    BusinessNews:`https://newsapi.org/v2/everything?apiKey=${apiKey}&language=en&q=business`,
    LifestyleNews:`https://newsapi.org/v2/everything?apiKey=${apiKey}&language=en&q=lifestyle`,
    MusicNews:`https://newsapi.org/v2/everything?apiKey=${apiKey}&language=en&q=music`,
    FasionNews:`https://newsapi.org/v2/everything?apiKey=${apiKey}&language=en&q=fasion`,
    q:``,
  
}

export default request