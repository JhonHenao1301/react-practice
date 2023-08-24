
import styled from 'styled-components'
import { useContext } from 'react'
import { BookIcon } from './Icons'
import { CartContext } from '../context/cartContext'

const FooterStyled = styled.div`
    label {
        display: flex;
        flex-direction: row;
        gap: .2rem;
        inline-size: 2.5rem;
        block-size: 2.5rem;
        justify-content: center;
        align-items: center;
        background: #09f;
        position: fixed;
        right: 1rem;
        top: 5rem;
        padding: .2rem;
        border-radius: 9999px;
        transition: all .4s ease;
    }
`

function Footer({ library }) {
    const { cart } = useContext(CartContext)
    const availableBooks = library.length - cart.length
    return (
        <FooterStyled>
            {
                <label>
                    { availableBooks }
                    <BookIcon />
                </label>
            }
        </FooterStyled>
    )
}

export default Footer
