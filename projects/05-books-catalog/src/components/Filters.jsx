
import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

import styled from 'styled-components'

const FiltersStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    margin-block: 2rem;
    font-size: 1.2rem;
    font-weight: 700;
    & > div {
        display: flex;
        gap: 1rem;
        align-items: center;
    }
    & .range input {
        block-size: .25rem;
        inline-size: 100%;
        background: #fff;
        border-radius: .25rem;
        outline: none;
        border: none;
        margin: 0;
    }
    & .range input::-webkit-slider-thumb {
        block-size: .5rem;
        inline-size: .5rem;
        border: none;
        border-radius: 50%;
        background: #a8a8a8;
        cursor: pointer;
    }
    & select {
        inline-size: 8rem;
        padding: .5rem;
        border: none;
        border-radius: .5rem;
        font-weight: 500;
        box-shadow: 0 0 5px rgba(0, 0, 0, .1);
        cursor: pointer;
        & > option {

        }
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
            <div className="range">
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
            <div className='genreOptions'>
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
