
import { useContext, useState } from "react"
import { DataContext } from "../context/DataContext"

import styled from 'styled-components'

const FormSearchStyled = styled.div`
    margin-block-end: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & h2 {
    font-size: 50px;
}
    & input[type="text"] {
        font-family: inherit;
        padding: 9px 17px;
        font-size: 20px;
        border-radius: 15px 0px 0px 15px;
        outline: none;
        border: 0;
    }
    & input[type="submit"] {
        font-size: 20px;
        padding: 12px 18px;
        border-radius: 0px 15px 15px 0px;
        background-color: #000;
        color: #fff;
        border: 0;
        cursor: pointer;
    }
    & input[type="submit"]:hover {
        background-color: #483f3f;
    }
`

function FormSearch() {
    const [ title, setTitle ] = useState('')
    const { setQuery, error } = useContext(DataContext)
    const handleSubmit = (e) => {
        setQuery(title)
        e.preventDefault()
    }
    return (
        <FormSearchStyled>
            <h2>Old movies finder</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Search your movie" 
                    onChange={ e => setTitle(e.target.value)}
                />
                <input type="submit" value='Search' />
            </form>
            { error && <p className="error">The movie doesn't exist</p> }
        </FormSearchStyled>
    )
}

export default FormSearch
