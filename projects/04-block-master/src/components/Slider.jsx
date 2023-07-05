
import styled from 'styled-components'


const SliderStyled = styled.div`
    /* border: 1px solid red; */
    margin-block: 3.5rem;
    aspect-ratio: 10 / 16;
    inline-size: 100%;
    block-size: 380px;
    position: relative;
    display: flex;
    gap: 1rem;
    overflow: auto;
    scroll-snap-type: x mandatory;
    &::-webkit-scrollbar {
        block-size: 5px;
    };
    &::-webkit-scrollbar-thumb {
        background: #ffe6e6fc;
        border-radius: 1rem;
    }
    & img {
        inline-size: 300px;
        left: 0;
        position: sticky;
        object-fit: cover;
        border-radius: 5px;
    }
`

function Slider({ lastMovies }) {
    return (
        <SliderStyled>
            {
                lastMovies?.map(lastMovie => {
                    return (
                            <img src={lastMovie.Poster} alt="movie" key={lastMovie.imdbID}/>
                    )
                })
            }
        </SliderStyled>
    )
}

export default Slider