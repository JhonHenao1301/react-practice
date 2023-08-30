
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'

import styled from 'styled-components'

const BookListStyled = styled.div`
    padding-inline: 2rem;
    .bookList {
        display: flex;
        gap: 1.2rem;
        flex-wrap: wrap;
        justify-content: center;
        & li {
            list-style: none;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
            inline-size: 12rem;
            background: #C5CAE9;
            padding: 1.2rem;
            border-radius: 1rem;
            & img {
                border-radius: .5rem;
                inline-size: 11rem;
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
                font-size: .9rem;
                text-align: center;
                margin: 0;
                color: #212121;
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
                                        style={{ backgroundColor:           checkProductInCart(item.book) 
                                            ? '#fc7070' 
                                            : '#94f8ad' }}
                                        onClick={() => {
                                            checkProductInCart(item.book)
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