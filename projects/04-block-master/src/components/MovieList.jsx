/* eslint-disable react/prop-types */

import styled from 'styled-components'

const MovieListStyled = styled.div`    
    /* border: 1px solid red; */
    display: grid;
    grid-template-columns: repeat(
        auto-fit,
        minmax(180px, 1fr)
    );
    column-gap: 1rem;
    row-gap: 3rem;
    .cards {
        position: relative;
    }
    img {
        inline-size: 180px;
        block-size: 280px;
    }
    span {
        position: absolute;
        left: 0;
        top: 10px;
        padding: .5rem 1rem;
        border-radius: 0 4rem 4rem 0;
        font-size: 1.5rem;
        font-weight: bold;
        background: rgba(0,0,0,0.4);
    }
    .currentMovie {
        border-top: 2px solid #f7be02;
        border-bottom: 2px solid #f7be02;
        border-right: 2px solid #f7be02;
    }
    .noCurrentMovie {
        border-top: 2px solid #4d9df8;
        border-bottom: 2px solid #4d9df8;
        border-right: 2px solid #4d9df8;
    }
`

function MovieList({ movies, setIdMovieSelected }) {
    function handleClickMovie(id) {
        setIdMovieSelected(id)
    }
    const currentMovie = (movieYear => movieYear >= 2012 ? 'currentMovie' : 'noCurrentMovie')
    return (
        <MovieListStyled>
            {
                movies?.map(movie => {
                    return (
                        <div 
                            className="cards" 
                            key={movie.imdbID} 
                            onClick={handleClickMovie(movie.imdbID)}
                            >
                            <img src={movie.Poster} alt="movie poster" />
                            <span 
                                className={`movieYear ${currentMovie(movie.Year)}`}>
                                {movie.Year}
                            </span>
                        </div>
                    )
                })
            }
        </MovieListStyled>
    )
}

export default MovieList
