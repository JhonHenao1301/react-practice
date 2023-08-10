
import { useContext, useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'

import '../components/Cart.css'
import { CartContext } from '../context/cartContext.jsx'


export function BookCart({ thumbnail, title, quantity }) {
  const { addToCart, removeFromCart } = useContext(CartContext)
    return (
        <>
            <li>
                <img
                    src={thumbnail}
                    alt={title}
                />
                <div>
                    <strong>{title}</strong>
                </div>

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
    const { cart, clearCart } = useContext(CartContext)
    return (
      <>
        <label className='cart-button' htmlFor={cartCheckboxId}>
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
                  title={item.book.title}
                  quantity={item.quantity}
                />
              ))
            }
          </ul>
  
          <button onClick={clearCart}>
            <ClearCartIcon />
          </button>
        </aside>
      </>
    )
  }

