
// import Board from "./components/Board"
import { library } from './mocks/books.json'
import { useFilters } from './hooks/useFilters'

import Header from './components/Header'
import BookList from './components/BookList'
// import Footer from './components/Footer'
import { Cart } from './components/BookCart'
import { CartProvider } from './context/cartContext'


function App() {
    const { filterBooks } = useFilters()
    const filteredBooks = filterBooks(library)

    return (
      <CartProvider>
        <Header />
        <Cart />
        <BookList library={filteredBooks}/>
        {/* <Footer /> */}
      </CartProvider>
    )
}

export default App
