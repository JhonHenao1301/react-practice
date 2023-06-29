/* eslint-disable react/prop-types */

import styled from 'styled-components'

const MovieListStyled = styled.div`    
    border: 1px solid red;
    display: grid;
    grid-template-columns: repeat(
        auto-fit,
        minmax(220px, 1fr)
    );
    column-gap: 1rem;
    row-gap: 3rem;
    img {
        inline-size: 220px;
        block-size: 330px;
    }
`

function MovieList({ movies }) {
    return (
        <MovieListStyled>
            {
                movies?.map(movie => {
                    return (
                        <div className="cards" key={movie.imdbID}>
                            <img src={movie.Poster} alt="movie poster" />
                        </div>
                    )
                })
            }
        </MovieListStyled>
    )
}

export default MovieList
