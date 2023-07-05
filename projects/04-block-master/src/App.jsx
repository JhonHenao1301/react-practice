
import Header from "./components/Header"
import Slider from "./components/Slider"
import MovieList from "./components/MovieList"
import './index.css'

import responseMovies from './mocks/results.json' 

function App() {
  const movies = responseMovies.Search
  const lastMovies = movies.slice(movies.length - 5)
  const hasMovies = movies?.length > 0
  return (
    <>
      <Header />
      <Slider lastMovies={lastMovies} />
      {
        hasMovies
        ? (
          <MovieList movies={movies} />
        )
        : ( 
          <p>There is no movies</p>
        )
      }
    </>
  )
}

export default App
