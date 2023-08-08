
// import Board from "./components/Board"
import { library } from './mocks/books.json'
import { useFilters } from './hooks/useFilters'

import Header from './components/Header'
import BookList from './components/BookList'
import Footer from './components/Footer'


function App() {
    const { filterBooks } = useFilters()
    const filteredBooks = filterBooks(library)

    return (
      <>
        <Header />
        <BookList library={filteredBooks}/>
        <Footer />
      </>
    )
}

export default App
