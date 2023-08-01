
// import { useContext } from 'react'
// import { readingListContext } from '../context/readingList'

import styled from 'styled-components'

const BookStyled = styled.div`
    
    .book {
        position: relative;
        width: 220px;
        height: 360px;
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
            padding: 1rem;
            color: black;
            height: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            border-radius: 0px 0px 15px 15px;
            transition: .7s;
            cursor: pointer;
        }
        & button {
            position: absolute;
            bottom: 1rem;
            right: 1rem;
            /* box-shadow: 26px 15px 75px -19px rgba(255,255,255,0.44); */
            border-radius: 50%;
            inline-size: 2rem;
            block-size: 2rem;
            background: #fbfd6b;
            font-weight: bold;
            color: white;
            font-size: 1rem;
            border: none;
        }
    }
    
`

// eslint-disable-next-line react/prop-types
function Book({ image }) {
    // const { addToReadingList } = useContext(readingListContext)
    const handleClick = () => {
        console.log(event)
    }
    return (
        <BookStyled>
            <article>
                <div
                    className="book"
                    style={{ backgroundImage: `url(${image})`}}
                >
                    <button onClick={handleClick}></button>
                </div>
            
            </article>
        </BookStyled>
    )
}

export default Book
