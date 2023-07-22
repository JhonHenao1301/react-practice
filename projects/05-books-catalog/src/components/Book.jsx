
// import { useState } from 'react'
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
    }
`

// eslint-disable-next-line react/prop-types
function Book({ image }) {
    // const [ status, setStatus ] = useState(false)
    // const handleClick = () => {
    //     setStatus(!status)
    //     console.log(status)
    // }
    return (
        <BookStyled>
            <article>
                <div className="book" style={{ backgroundImage: `url(${image})`}}>
                </div>
            </article>
        </BookStyled>
    )
}

export default Book
