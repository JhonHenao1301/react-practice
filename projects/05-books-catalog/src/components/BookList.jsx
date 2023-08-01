
import { library } from '../mocks/books.json'
import Book from './Book'

import styled from 'styled-components'

const BookListStyled = styled.div`
    padding-inline: 2rem;
    h1 {
        font-size: 4rem;
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

function BookList() {
    return (
        <BookListStyled>
            <h1>Books catalog</h1>
            <div className="bookList">
                {
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
        </BookListStyled>
    )
}

export default BookList