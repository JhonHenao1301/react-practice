
import { useContext } from "react"
import { FilterContext } from '../context/filterContext'

export function useFilters () {
    const { filters, setFilters } = useContext(FilterContext)

    const filterBooks = (items) => {
        return items.filter(item => {
            return (
                item.book.pages >= filters.pages && (
                    filters.genre === 'all' || 
                    item.book.genre === filters.genre
                )
            )  
        })
    }

    return { filters, filterBooks, setFilters }
}