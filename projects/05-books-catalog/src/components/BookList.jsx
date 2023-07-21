
import { library } from '../mocks/books.json'
import Book from './Book'

import styled from 'styled-components'

const BookListStyled = styled.div`
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
    const selectedBooksList = []
    return (
        <BookListStyled>
            <h1>Books catalog</h1>
            <div className="bookList">
                {
                    library?.map((item, index) => (
                        <Book 
                            key={index}
                            title={item.book.title}
                            genre={item.book.genre}
                            image={item.book.cover}
                            author={item.book.author.name}
                        />
                    ))
                }
            </div>
            <div className="selectedBooks">
                {
                    selectedBooksList 
                    ? selectedBooksList?.map((item, index) => (
                        <Book 
                            key={index}
                            title={item.book.title}
                            genre={item.book.genre}
                            image={item.book.cover}
                            author={item.book.author.name}
                        />   
                    ))
                    : <h2>Chosen book list is empty</h2>
                }
            </div>
        </BookListStyled>
    )
}

export default BookList