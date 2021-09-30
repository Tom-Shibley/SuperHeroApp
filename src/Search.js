import React, { useRef, useState } from 'react';

 const Search = (props) => {
    const [originalData] = useState(props.superHeroData)
    const searchRef = useRef();
    function debounce(func, timeout = 300){
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
      };
    }
    const onSearch = debounce(() => {
    const filterdData = originalData?.filter(hero => {
      return hero.name.includes(searchRef.current.value)
    })
    props.setSuperHeroData(filterdData);
  })
  return (
      <div className="search">
        <input ref={searchRef} type="text" onChange={onSearch} placeholder="Search by Name"/>
      </div>
    )
  }

export default Search