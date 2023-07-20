
import styled from 'styled-components'

const BookStyled = styled.div`
    
    .book {
        /* border: 1px solid red; */
        width: 360px;
        height: 580px;
        background-size: cover;
        border-radius: 15px;
        display: flex;
        align-items: flex-end;
        &:hover > .info {
            color: #fff;
            background-color: black;
        }
        & .info {
            background-color: #ffffffd9;
            width: 100%;
            padding: 10px 30px;
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
                    font-size: .8rem;
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
`

// eslint-disable-next-line react/prop-types
function Book({ title, pages, genre, image, year, author }) {
    return (
        <BookStyled>
            <article>
                <div className="book" style={{ backgroundImage: `url(${image})`}}>
                    <div className="info">
                        <h4>{ title }</h4>
                        <p className="row-info">
                            <span><strong>Pages:</strong> { pages }</span>
                            <span><strong>Genre:</strong> { genre }</span>
                        </p>
                        <p className="row-info">
                            <span><strong>Year:</strong> { year }</span>
                            <span><strong>Author:</strong> { author }</span>
                        </p>
                    </div>
                </div>
            </article>
        </BookStyled>
    )
}

export default Book
