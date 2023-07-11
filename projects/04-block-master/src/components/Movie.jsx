
import DefaultImage from "/NoImage.png"
import { Link } from "react-router-dom"

import styled from 'styled-components'

const MovieStyled = styled.div`
    .item-movie {
        width: 250px;
        height: 300px;
        background-size: cover;
        border-radius: 15px;
        display: flex;
        align-items: flex-end;
        &:hover > .info {
            color: #fff;
            background-color: black;
        }
    }
    .info {
        background-color: #ffffffd9;
        width: 100%;
        padding: 10px 30px;
        height: 87px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border-radius: 0px 0px 15px 15px;
        transition: .7s;
    }
    .info p {
        margin: 0;
    }
    .info p span {
        text-decoration: none;
    }
    .info h4 {
        margin: 0 0 8px;
        line-height: 19px;
    }

    .row-info {
        display: flex;
        justify-content: space-between
    }
`

function Movie({ id, title, type, year, poster }) {
    let image = poster === "N/A" ? DefaultImage : poster
    return (
        <MovieStyled>
            <Link to={`/movies/${id}`} style={{ color: 'inherit', textDecoration: 'none'}}>
                <article>
                    <div className="item-movie" style={{ backgroundImage: `url(${image})`}}>
                        <div className="info">
                            <h4>{ title }</h4>
                            <p className="row-info">
                                <span>{type}</span>
                                <span>{year}</span>
                            </p>
                        </div>

                    </div>
                </article>
            </Link>
        </MovieStyled>
    )
}

export default Movie
