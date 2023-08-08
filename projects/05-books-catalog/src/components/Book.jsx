
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
    const handleClick = () => {
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
