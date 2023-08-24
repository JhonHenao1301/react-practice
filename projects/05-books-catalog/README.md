
- [x] Available books visualization: App must show a list of available
books that user can check out.


- [x] Reading List Creation: The user must be able to create a reading list from the available books. It should be clear from the UI which books are on the reading list and which are not. It should also be possible to move a book from the reading list to the available list.

- [] Filtering Books by Genre: Users should be able to filter the list of available books by genre, and a counter will be displayed with the number of books available, the number of books on the reading list, and the number of books available in the selected genre.

- [x] State Synchronization: There should be a global state perturbation that reflects the number of books on the reading list and the number of books still available. If a book is moved from the available list to the reading list, the count for both should be updated accordingly.

- [] Data Persistence: The application must persist reading list data in the browser's local storage. When reloading the page, the reading list should be maintained.

- [x] Synchronization between tabs: If the user opens the application in two different tabs, changes made in one tab should be reflected in the other. No need to use Backend.

- [] Deployment: The application must be deployed on a free hosting service (Netlify, Vercel, Firebase, etc) and must be accessible through a public URL. Indicate the URL in the README.

- [] Test: The application must have AT LEAST one test. Do the test that you consider most important for your application.


//Create context
// eslint-disable-next-line react-refresh/only-export-components
export const readingListContext = createContext()

//Create provider
// eslint-disable-next-line react/prop-types
export function ReadingListProvider({ children }) {
    const [ readingList, setReadingList ] = useState([])

    const addToReadingList = () => {
        console.log('sum')
        // const newReadingList = structuredClone(readingList)
        return setReadingList([])
    }
    const clearReadingList = () => {
        setReadingList([])
    }
    return (
        <ReadingListProvider value={{ 
            readingList,
            addToReadingList,
            clearReadingList
        }}>
            { children }
        </ReadingListProvider>
    )
} 


