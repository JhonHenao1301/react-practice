
import { createContext, useState } from 'react'
// import { cartReducer, cartInitialState } from '../reducers/cart.js'

// 1. Create context
export const CartContext = createContext()

// 2. Create provider
export function CartProvider ({ children }) {
  // const { state, addToCart, removeFromCart, clearCart } = useCartReducer()
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
      item => item.book.ISBN === product.key
    )

    if(bookInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      if(newCart[bookInCartIndex].quantity === 1) {
        const newCartWithoutItem = structuredClone(cart.filter(item => item.id !== product.id))
        return setCart(newCartWithoutItem)
      }
      newCart[bookInCartIndex].quantity -= 1
      return setCart(newCart)
    }

    const newCart = structuredClone(cart.filter(item => item.id !== product.id))

    setCart(newCart)
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



// function useCartReducer () {
//     const [state, dispatch] = useReducer(cartReducer, cartInitialState)

//     const addToCart = product => dispatch({
//         type: 'ADD_TO_CART',
//         payload: product
//     })

//     const removeFromCart = product => dispatch({
//         type: 'REMOVE_FROM_CART',
//         payload: product
//     })

//     const clearCart = () => dispatch({ type: 'CLEAR_CART' })

//     return { state, addToCart, removeFromCart, clearCart }
// }