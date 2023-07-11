
import { useState } from "react";
import { createContext } from "react";
import { useFetch } from "../hooks/useFetch";


export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [ query, setQuery ] = useState('Avengers')
    const { isLoading, error, data } = useFetch(`&s=${query}`)

    return (
        // In value I define which values I'll share between components
        <DataContext.Provider value={{ setQuery, isLoading, error, data }}>
            { children }    
        </DataContext.Provider>
    )
}