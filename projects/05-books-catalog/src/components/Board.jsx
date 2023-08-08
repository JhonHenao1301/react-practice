
// import { library } from '../mocks/books.json'
// import { useFilters } from '../hooks/useFilters'

// import Header from './Header'
// import BookList from './BookList'
// import Footer from './Footer'

import styled from 'styled-components'

const BoardStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding-block: 2rem;
`

function Board() {
    // const { filterBooks } = useFilters()

    // const filteredBooks = filterBooks(library)
    return (
        <BoardStyled>
            {/* <Header />
            <BookList library={filteredBooks}/>
            <Footer /> */}
        </BoardStyled>
    )
}

export default Board
