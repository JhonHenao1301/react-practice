
import styled from 'styled-components'

const LayoutStyled = styled.div`
`

// eslint-disable-next-line react/prop-types
function Layout({children}) {
    
    return (
        <LayoutStyled>
            {children}
        </LayoutStyled>
    )
}

export default Layout
