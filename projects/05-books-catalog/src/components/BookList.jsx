
import { library } from '../mocks/books.json'
import Book from './Book'

import styled from 'styled-components'

const BookListStyled = styled.div`
    .bookList {
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
        justify-content: center;
    }
`

function BookList() {
    return (
        <BookListStyled>
            <h1>Books catalog</h1>
            <div className="bookList">
                {
                    library?.map((item, index) => (
                        <Book 
                            key={index}
                            title={item.book.title}
                            pages={item.book.pages}
                            genre={item.book.genre}
                            image={item.book.cover}
                            year={item.book.year}
                            author={item.book.author.name}
                        />
                    ))
                }
            </div>
        </BookListStyled>
    )
}

export default BookList