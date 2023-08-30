
import { createContext, useState } from "react"

export const FilterContext = createContext()

export function FilterProvider ({ children }) {
    const [filters, setFilters] = useState({
        pages: 0,
        genre: 'all',
    })

    return (
        <FilterContext.Provider value={{ 
            filters,
            setFilters
        }} 
        >
            {children}
        </FilterContext.Provider>
    )
}