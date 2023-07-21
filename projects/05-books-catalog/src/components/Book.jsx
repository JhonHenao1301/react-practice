
import { useState } from 'react'
import styled from 'styled-components'

const BookStyled = styled.div`
    
    .book {
        position: relative;
        width: 320px;
        height: 460px;
        background-size: cover;
        border-radius: 15px;
        display: flex;
        align-items: flex-end;
        &:hover > .info {
            color: #fff;
            background-color: black;
        }
        & .info {
            background-color: #ffffffab;
            width: 100%;
            padding: 1rem 1.8rem;
            color: black;
            height: 6rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            border-radius: 0px 0px 15px 15px;
            transition: .7s;
            & p {
                margin: 0;
                & span {
                    text-decoration: none;
                    font-size: 1rem;
                }
            }
            & h4 {
                margin: 0 0 8px;
                line-height: 19px;
            }
            & .row-info {
                display: flex;
                justify-content: space-between
            }
        }
    }
    .btnAdd {
        right: 1rem;
        bottom: 2rem;
        border: 1px solid red;
        position: absolute;
        border-radius: 50%;
        block-size: 2rem;
        inline-size: 2rem;
    }
`

// eslint-disable-next-line react/prop-types
function Book({ title, genre, image, author }) {
    const [ status, setStatus ] = useState(false)
    const handleClick = () => {
        setStatus(!status)
    }
    return (
        <BookStyled>
            <article>
                <div className="book" style={{ backgroundImage: `url(${image})`}}>
                    <div className="info">
                        <h4>{ title }</h4>
                        <p className="row-info">
                            <span><strong>Genre:</strong> { genre }</span>
                        </p>
                        <p className="row-info">
                            <span><strong>Author:</strong> { author }</span>
                        </p>
                    </div>
                    <button className='btnAdd' onClick={handleClick}></button>
                </div>
            </article>
        </BookStyled>
    )
}

export default Book
