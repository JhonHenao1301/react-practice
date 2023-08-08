/* eslint-disable react/prop-types */

import Filters from './Filters'

import styled from 'styled-components'

const HeaderStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
