/* eslint-disable react/prop-types */

import { useContext } from 'react'
import { DataContext } from '../context/DataContext'

import styled from 'styled-components'
import Movie from './Movie'

const MovieListStyled = styled.div`    
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
`

function MovieList() {
    const { isLoading, data, typeOfMovies } = useContext(DataContext)
    return (
        <MovieListStyled>
            {
                !isLoading
                ? data.map(item => (
                    <Movie 
                        key={item.imdbID}
                        id={item.imdbID}
                        title={item.Title}
                        type={item.Type}
                        year={item.Year}
                        poster={item.Poster}
                    />
                ))
                : ""
            }
        </MovieListStyled>
    )
}

export default MovieList
