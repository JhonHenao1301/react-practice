
import styled from 'styled-components'

const SelectedBooksStyled = styled.div`
    display: flex;
    background: #818181c5;
    justify-content: center;
    scroll-padding-block: 4rem;
    padding-block: 4rem;
    padding-inline: 2rem;
    h2 {
        font-size: 1.5rem;
    }
`

function SelectedBooks() {
    return (
        <SelectedBooksStyled>
            <h2>Reading list</h2>
        </SelectedBooksStyled>
    )
}

export default SelectedBooks
