
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'

import styled from 'styled-components'

const BookListStyled = styled.div`
    padding-inline: 2rem;
    .bookList {
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
        justify-content: center;
        & li {
            list-style: none;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 1.5rem;
            inline-size: 14rem;
            background: #242424;
            padding-block: 2rem;
            padding-inline: .5rem;
            border-radius: 1rem;
            & img {
                border-radius: 1rem;
                inline-size: 12rem;
                block-size: 16rem;
                object-fit: cover;
            }
            & button {
                border-radius: .5rem;
                border: none;
            }
        }
        & .book_description {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: .5rem;
            & > p {
                text-align: center;
                margin: 0;
            }
            & > button {
                width: 12rem;
            }
        }
    }
`

function BookList({ library }) {
    const { cart, addToCart, removeFromCart } = useContext(CartContext)
    const checkProductInCart = product => {
        return cart.some(item => item.book.ISBN === product.ISBN)
    }

    return (
        <BookListStyled>
            <main>
                <div className="bookList">
                    {
                        library?.map(item => {
                            const isProductInCart = checkProductInCart(item)
                            // console.log(isProductInCart)

                            return (
                            <li key={item.book.ISBN}>
                                <img 
                                    src={item.book.cover} 
                                    alt={item.book.title} 
                                />
                                <div className="book_description">
                                    <p><strong>{item.book.title}</strong></p>
                                    <p>{item.book.genre}</p>
                                    <button
                                        style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }} 
                                        onClick={() => {
                                            isProductInCart
                                            ? removeFromCart(item)
                                            : addToCart(item)
                                        }}
                                        >
                                        {
                                            checkProductInCart(item.book)
                                            ? <RemoveFromCartIcon />
                                            : <AddToCartIcon />
                                        }
                                    </button>
                                </div>
                            </li>
                            )
                        })
                    }
                </div>
            </main>
        </BookListStyled>
    )
}

export default BookList