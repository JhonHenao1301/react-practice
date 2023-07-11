
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import DefaultImage from '/NoImage.png'

import styled from 'styled-components'

const SingleMovieStyled = styled.div`
    /* single movie */
    .single-movie {
        display: flex;
        gap: 25px;
        margin: 7% 0 3%;
        justify-content: center;
    }
    .single-movie .single-info {
        width: 500px;
        text-align: left;
        background-color: #ffffff9e;
        padding: 13px 25px;
        border-radius: 15px;
    }
    .single-movie .single-info h2 {
        font-size: 40px;
        line-height: 42px;
        margin-top: 0;
    }
    .single-movie img {
        border-radius: 15px;
        object-fit: cover;
        width: 300px;
    }
`

function SingleMovie() {
    const { id } = useParams()
    const { isLoading, error, data } = useFetch(`&i=${id}`)
    
    if(isLoading) {
        return <div className='loading'></div>
    }

    const { Poster, Title, Year, Plot, Country, Director, Released, Runtime } = data;
    let image = Poster === 'N/A' ? DefaultImage : Poster

    return (
        <SingleMovieStyled>
            {
                !isLoading ?
                <div className="single-movie">
                    <img src={image} alt={Title} />
                    <div className="single-info">
                        <h2>{Title}</h2>
                        <p>{Plot}</p>
                        <p><strong>Country: </strong>{Country}</p>
                        <p><strong>Director: </strong>{Director}</p>
                        <p><strong>Released: </strong>{Released}</p>
                        <p><strong>Runtime: </strong>{Runtime}</p>
                        <p><strong>Year: </strong>{Year}</p>
                    </div>
                </div>
                : ''
            }
        </SingleMovieStyled>
    )
}

export default SingleMovie
