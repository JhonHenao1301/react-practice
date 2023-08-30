
import { createContext, useState } from 'react'

// 1. Create context
export const CartContext = createContext()

// 2. Create provider
export function CartProvider ({ children }) {
  const [ cart, setCart ] = useState([])

  const addToCart = product => {
    //Check if product is on cart
    const bookInCartIndex = cart.findIndex(
      item => item.book.ISBN === product.book.ISBN
    )

    //Product is on cart, so modify just quantity
    if(bookInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[bookInCartIndex].quantity += 1
      return setCart(newCart)
    }

    // Product is not on cart
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const removeFromCart = product => {
    const bookInCartIndex = cart.findIndex(
      item => item.book.ISBN === product.book.ISBN
    )

    if(bookInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      if(newCart[bookInCartIndex].quantity === 1) {
        const newCartWithoutItem = structuredClone(cart.filter(item => item.book.ISBN !== product.book.ISBN))
        return setCart(newCartWithoutItem)
      }
      newCart[bookInCartIndex].quantity -= 1
      return setCart(newCart)
    }
  }

  const clearCart = () => { setCart([]) }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}