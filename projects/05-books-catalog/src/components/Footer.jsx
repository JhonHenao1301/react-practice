
import { useContext } from 'react'
import styled from 'styled-components'
// import { FilterContext } from '../context/filterContext'
import { CartContext } from '../context/cartContext'

const FooterStyled = styled.div`
    position: fixed;
    left: 16px;
    bottom: 16px;
    text-align: left;
    background: rgba(0, 0, 0, .7);
    padding: 4px 24px;
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
    // const { filters } = useContext(FilterContext)
    const { cart } = useContext(CartContext)
    const cartLength = cart.length
    return (
        <FooterStyled>
            {
                <h2>{cartLength}</h2>

                /* cart.map(item => {
                    // console.log(cart)
                    return (
                        <div key={item.book.ISBN}>
                            <p>
                                {item.book.title}
                            </p>
                        </div>
                    )
                }) */
                // JSON.stringify(cart)
            }
        </FooterStyled>
    )
}

export default Footer
