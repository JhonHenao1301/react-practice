/* eslint-disable react/prop-types */

import Filters from './Filters'

import styled from 'styled-components'

const HeaderStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        font-size: 2rem;
        color: #fff;
        background-color: #212121;
        letter-spacing: .4em;
        text-shadow: 
        0 -1px 0 #fff, 
        0 1px 0 #2e2e2e, 
        0 2px 0 #2c2c2c, 
        0 3px 0 #2a2a2a, 
        0 4px 0 #282828, 
        0 5px 0 #262626, 
        0 6px 0 #242424, 
        0 7px 0 #222, 
        0 8px 0 #202020, 
        0 9px 0 #1e1e1e, 
        0 10px 0 #1c1c1c, 
        0 11px 0 #1a1a1a, 
        0 12px 0 #181818, 
        0 13px 0 #161616, 
        0 14px 0 #141414, 
        0 15px 0 #121212, 
        0 22px 30px rgba(255, 255, 255, 0.5);
    }
`

function Header() {
    return (
        <HeaderStyled>
            <h2>Books catalog</h2>
            <Filters />
        </HeaderStyled>
    )
}

export default Header
