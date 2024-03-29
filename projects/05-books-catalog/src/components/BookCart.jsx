
import { useContext, useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'

import '../components/Cart.css'
import { CartContext } from '../context/cartContext.jsx'


export function BookCart({ thumbnail, title, quantity, addToCart, removeFromCart }) {
    return (
        <>
            <li>
                <img
                    src={thumbnail}
                    alt={title}
                />

                <footer>
                    <button onClick={removeFromCart}>-</button>
                    <small>
                    Qty: {quantity}
                    </small>
                    <button onClick={addToCart}>+</button>
                </footer>
            </li>
        </>
    )
}

export function Cart () {
    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart, removeFromCart } = useContext(CartContext)
    const cartLength = cart.reduce((acc, curr) => {
      return acc + curr.quantity
    }, 0)
    return (
      <>
        <label className='cart-button' htmlFor={cartCheckboxId}>
          {
            cartLength > 0
            ? <span>{cartLength}</span>
            : ''
          }
          <CartIcon />
        </label>
        <input id={cartCheckboxId} type='checkbox' hidden/>
  
        <aside className='cart'>
          <ul>
            {
              cart.map(item => (
                <BookCart
                  key={item.book.ISBN}
                  thumbnail={item.book.cover}
                  quantity={item.quantity}
                  addToCart={() => addToCart(item)}
                  removeFromCart={() => removeFromCart(item)}
                />
              ))
            }
          </ul>
  
          <button className='clearCartButton' onClick={clearCart}>
            <ClearCartIcon />
          </button>
        </aside>
      </>
    )
  }


