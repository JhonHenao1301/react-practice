
import BookList from './BookList'
import SelectedBooks from './SelectedBooks'

import styled from 'styled-components'

const BoardStyled = styled.div`
    display: grid;
    grid-template-columns: 4fr 2fr;
    gap: 1rem;
`

function Board() {
    return (
        <BoardStyled>
            <BookList />
            <SelectedBooks />
        </BoardStyled>
    )
}

export default Board
