import React from 'react'
import News from './News'
import HeadNews from './HeadNews'
import PopularNews from './PupularNews'
function Home() {
  return (
    <div>
      <HeadNews />
      <PopularNews />
      <News />
    </div>
  )
}

export default Home