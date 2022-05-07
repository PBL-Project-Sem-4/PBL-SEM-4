const apiKey=`2c775f4e4c2a4c2590c3821a0b546db4`;

const request={
    GeneralNews:`https://newsapi.org/v2/everything?apiKey=${apiKey}&language=en&q=general`,
    SportsNews:`https://newsapi.org/v2/everything?apiKey=${apiKey}&language=en&q=sports`,
    BusinessNews:`https://newsapi.org/v2/everything?apiKey=${apiKey}&language=en&q=business`,
    LifestyleNews:`https://newsapi.org/v2/everything?apiKey=${apiKey}&language=en&q=lifestyle`,
    MusicNews:`https://newsapi.org/v2/everything?apiKey=${apiKey}&language=en&q=music`,
    FasionNews:`https://newsapi.org/v2/everything?apiKey=${apiKey}&language=en&q=fasion`,

}

export default request