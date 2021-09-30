import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component'
import Cards from './Cards';
import Search from './Search'
import getData from './getSuperHeroData';
import './App.css';

function App() {
  const [superHeroData, setSuperHeroData] = useState();
  const getHeroData = async () => {
    const data = await getData();
    setSuperHeroData(data);
  }
  useEffect(() => {
    if (!superHeroData) {
      getHeroData();
    }
  }, [superHeroData])

  const HeroMenu = () => {
    const infiniteScrollProps = {
      dataLength: superHeroData.length,
      hasMore: true,
      loader: 'Loading...',
    }
    return (
      <>
        <InfiniteScroll {...infiniteScrollProps}>{superHeroData.map((data, index) => {
          return (<Cards key={index} {...data} />)
        })}</InfiniteScroll>
      </>
    )
  }
  return (
    <>
      <h1 className="App-Header">Super Hero Information</h1>
      <div className="App-Body">
        {
          superHeroData ?
          <>
            <Search {...{ superHeroData, setSuperHeroData }}/>
            <HeroMenu />
          </>
          : "Loading Hero Data..."
        }
      </div>
    </>
  );
}

export default App;