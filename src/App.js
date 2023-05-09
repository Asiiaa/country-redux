import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setDependent, setSortPopulation, setSortArea, setTitle, setInDependent, setValueRegion, setValueSubRegion, setSearchValue } from "./store";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
import FilterRegion from "./components/FilterRegion";
import FilterSubRegion from "./components/FilterSubRegion";
import Cards from "./components/Cards";
import { setCount } from "./store";
import Search from "./components/Search";
import { Pagination } from "@mui/material";


function App(props) {
  const [isLoading, setIsLoading] = useState(true)
  const [collections, setCollections] = useState([])
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://restcountries.com/v3.1/all`)
      .then(res => res.json()).then((json) => {
      setCollections(json)
    }).catch((err) => {
      alert('Ошибка при получении данных.')
    }).finally(() => setIsLoading(false))
  }, [])

  const country = () => {
    props.setCount(collections)
  }
  const filterDependent = () => {
    props.setDependent(collections)
  }
  const filterInDependent = () => {
    props.setInDependent(collections)
  }
  const sortPopulation = () => {
    props.setSortPopulation(collections)
  }
  const sortArea = () => {
    props.setSortArea(collections)
  }
  const valueRegion = (valueRegion) => {
    props.setValueRegion({collections, valueRegion})
  }
  const valueSubRegion = (valueSubRegion) => {
    props.setValueSubRegion({collections, valueSubRegion})
  }
  const searchValue = (searchValue) => {
    props.setSearchValue({collections, searchValue})
  }
  const handleChange = (event, value) => {
    setPage(value);
  };

  const lastCountryIndex = page * props.pageLength
  const firstCountryIndex = lastCountryIndex - props.pageLength
  const currentCountry = props.country.slice(firstCountryIndex, lastCountryIndex)
  


  return (
    <div className="App">
      <div className="header">
        <div>
          <button onClick={() => country()}>countries</button>
          <Sort sortPopulation={sortPopulation} sortArea={sortArea}/>
          <Filter filterDependent={filterDependent} filterInDependent={filterInDependent}/>
        </div>

        <div className="filter-variable">
          <FilterRegion valueRegion={valueRegion}/>
          <FilterSubRegion valueSubRegion={valueSubRegion}/>
      </div>
      <Search searchValue={searchValue}/>
      </div>
  
      <div className='cards'>
        {isLoading ? (<h2 className='loading'>Loading...</h2>) :
          (currentCountry.map((country) => (
            <Cards key={Math.random()} img={country.flags.png} name={country.name.common} capital={country.capital} population={country.population} area={country.area}/>
          )))}
      </div>
      <div className='pagination'>
        <Pagination 
          count={Math.floor(props.country.length/props.pageLength)}
          color="primary" 
          onChange={handleChange}
          page={page}
          />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    country: state.country,
    pageLength: state.pageLength
  }
}

export default connect(mapStateToProps, {setCount, setDependent, setInDependent, setSortPopulation, setSortArea, setValueRegion, setValueSubRegion, setSearchValue})(App);
