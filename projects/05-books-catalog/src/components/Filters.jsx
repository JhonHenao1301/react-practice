
import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

import styled from 'styled-components'

const FiltersStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    margin-block: 2rem;
    font-size: 1.5rem;
    font-weight: 700;
    & > div {
        display: flex;
        gap: 1rem;
    }
`

function Filters() {
    const { filters, setFilters } = useFilters()

    const minPagesFilterId = useId()
    const genreFilterId = useId()

    const handleChangePages = (event) => {
        setFilters(prevState => ({
          ...prevState,
          pages: event.target.value
        }))
    }

    const handleChangeGenre = (event) => {
        setFilters(prevState => ({
          ...prevState,
          genre: event.target.value
        }))
    }

    return (
        <FiltersStyled>
            <div>
                <label htmlFor="pages">Pages</label>
                <input 
                    type="range" 
                    id={minPagesFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangePages}
                    value={filters.pages}
                />
                <span>{filters.pages}</span>
            </div>
            <div>
                <label htmlFor="genre">Genre</label>
                <select id={genreFilterId} onChange={handleChangeGenre}>
                    <option value="all">All</option>
                    <option value="Fantasía">Fantasy</option>
                    <option value="Ciencia ficción">Fiction</option>
                    <option value="Terror">Terror</option>
                    <option value="Zombies">Zombies</option>
                </select>
            </div>
        </FiltersStyled>
    )
}

export default Filters
