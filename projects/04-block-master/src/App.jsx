
import Header from "./components/Header"
import Slider from "./components/Slider"
import MovieList from "./components/MovieList"
import './index.css'

// import responseMovies from './mocks/results.json' 
import { useEffect, useState } from "react"

function App() {
  const [ fetchedData, updateFetchedData ] = useState([]);
  const { Search } = fetchedData;
  const [ searchMovie, setSearchMovie ] = useState('Avengers')
  const [ typeMovie, setTypeMovie ] = useState('')
  const [ idMovieSelected, setIdMovieSelected ] = useState('')

  const APIKEY = 'fc906e76'
  const apiMovies = `https://omdbapi.com/?apikey=${APIKEY}&s=${searchMovie}&type=${typeMovie}`
  const apiMovie = `https://omdbapi.com/?apikey=${APIKEY}&i=${idMovieSelected}`

  
  const lastMovies = Search?.slice(Search.length - 4)
  const hasMovies = Search?.length > 0

  useEffect(() => {
    (async function() {
      let data = await fetch(apiMovies).then((res) => res.json());
      updateFetchedData(data)
      
    })();
  }, [apiMovies])

  useEffect(() => {
    (async function() {
      console.log(idMovieSelected)
      if(idMovieSelected) {
        let dataMovie = await fetch(apiMovie).then((res) => res.json());
        console.log(dataMovie)
      }
    })();
  }, [apiMovie])

  return (
    <>
      <Header setSearchMovie={setSearchMovie} setTypeMovie={setTypeMovie}/>
      <Slider lastMovies={lastMovies} />
      {
        hasMovies
        ? (
          <MovieList movies={Search} setIdMovieSelected={setIdMovieSelected} />
        )
        : ( 
          <h2>There is no movies</h2>
        )
      }
    </>
  )
}

export default App
