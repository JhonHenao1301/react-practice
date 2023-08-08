
import Book from './Book'

import styled from 'styled-components'

const BookListStyled = styled.div`
    padding-inline: 2rem;
    h1 {
        font-size: 3rem;
        margin-block: 4rem;
        text-align: center;
    }
    .bookList {
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
        justify-content: center;
    }
    .selectedBooks {
        border: 1px solid white;
        padding-block: 2rem;
        border-radius: 1rem;
        margin-block: 2rem;
        text-align: center;
    }
`

function BookList({ library }) {
    return (
        <BookListStyled>
            <main>
                <div className="bookList">
                    {
                        // eslint-disable-next-line react/prop-types
                        library?.map((item) => (
                            <Book 
                                key={item.book.ISBN}
                                title={item.book.title}
                                genre={item.book.genre}
                                image={item.book.cover}
                                author={item.book.author.name}
                            />
                        ))
                    }
                </div>
            </main>
        </BookListStyled>
    )
}

export default BookList