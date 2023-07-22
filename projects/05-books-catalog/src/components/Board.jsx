
// import { useState } from 'react'
import { library, readingList } from '../mocks/books.json'

import styled from 'styled-components'
import BookList from './BookList'
import SelectedBooks from './SelectedBooks'

const BoardStyled = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 1rem;
`

function Board() {
    // const [ listOfLists, setListOfLists ] = useState({ 
    //     library,
    //     readingList
    // })
    return (
        <BoardStyled>
            <BookList />
            <SelectedBooks />
        </BoardStyled>
    )
}

export default Board
