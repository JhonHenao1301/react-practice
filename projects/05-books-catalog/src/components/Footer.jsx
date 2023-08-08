
import { useContext } from 'react'
import styled from 'styled-components'
import { FilterContext } from '../context/filterContext'

const FooterStyled = styled.div`
    position: fixed;
    left: 16px;
    bottom: 16px;
    text-align: left;
    background: rgba(0, 0, 0, .7);
    padding: 8px 24px;
    border-radius: 32px;
    opacity: .95;
    backdrop-filter: blur(8px);

    & span {
        font-size: 14px;
        color: #09f;
        opacity: .8;
    }

    & h4, h5 {
        margin: 0;
        display: flex;
    }
`

function Footer() {
    const { filters } = useContext(FilterContext)
    return (
        <FooterStyled>
            <h4>React technical test - <span>@jhenao</span></h4>
            <h5>
                Books catalog made by useContext and useState - 
                <span>{filters.genre}</span> 
            </h5>
            <h5>
                <span>{filters.pages}</span> 
            </h5>
        </FooterStyled>
    )
}

export default Footer
