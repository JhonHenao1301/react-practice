
import { useState } from "react";
import { createContext } from "react";
import { useFetch } from "../hooks/useFetch";


export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [ query, setQuery ] = useState('Avengers')
    const [ typeOfMovie, setTypeOfMovie ] = useState('')
    let   { isLoading, error, data } = useFetch(`&s=${query}`)

    if(typeOfMovie) {
        data = data.filter((item) => {
            if (item.Type) {
                return item.Type === typeOfMovie;
              }
              return null
        })
    }

    return (
        // In value I define which values I'll share between components
        <DataContext.Provider value={{ setQuery, isLoading, error, data, setTypeOfMovie }}>
            { children } 
        </DataContext.Provider>
    )
}