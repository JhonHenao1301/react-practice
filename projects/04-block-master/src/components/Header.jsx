
import styled from 'styled-components'

const HeaderStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    padding-block: 1.5rem;

    ul {
        display: flex;
        flex-direction: row;
        gap: 3rem;
        
        & li {
        list-style: none;
        }
    }
`

function Header() {
    return (
        <HeaderStyled>
            <img src="/react.svg" alt="Block buster logo" width={20} height={20}/>
            <ul>
                <li>All</li>
                <li>Least valued</li>
                <li>Most valued</li>
            </ul>
            <input type="text" placeholder='Search your favorite movie'/>
        </HeaderStyled>
    )
}

export default Header
