
import styled from 'styled-components'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'

import Logo from '../icons/BlockBuster-logo'

const HeaderStyled = styled.header`
    nav {
        padding-block: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & .actionsNavBar {
            display: flex;
            gap: .75rem;
            & ul {
                display: flex;
                gap: .25rem;
                margin: 0;
                padding: 0;
                & button {
                    border: none;
                    background: var(--bg-dark);
                    color: white;
                    padding: .5rem 1rem;
                    font-family: var(--font-family);
                    font-size: 1rem;
                    cursor: pointer;
                    &:hover {
                        color: #e7e7e7;
                        font-size: 1.125rem;
                    }
                }
            }
        }
    }
`

function Header() {
    const { setTypeOfMovie } = useContext(DataContext)
    const handleClick = (event) => {
        const typeOfContent = event.target.innerHTML
        if(typeOfContent) {
            if(typeOfContent === 'Movies') {
                setTypeOfMovie('movie')
            }
                else if(typeOfContent === 'Series') {
                    setTypeOfMovie('series')
                }
                    else {
                        setTypeOfMovie('')
                    }
        }
    }
    return (
        
        <HeaderStyled>
            <nav>
                <div className="logo">
                    <Logo width={120} height={68} />
                </div>
                <div className="actionsNavBar">
                    <ul>
                        <button onClick={handleClick}>All</button>
                        <button onClick={handleClick}>Movies</button>
                        <button onClick={handleClick}>Series</button>
                    </ul>
                </div>
            </nav>
        </HeaderStyled>
    )
}

export default Header
