
import styled from 'styled-components'
import { useState } from 'react'

const TwitterFollowCardStyled = styled.article`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    font-size: .8rem;
    gap: 6rem;

    header {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .header-body {
        display: flex;
        flex-direction: column;
    }
    span {
        opacity: .6;
    }
    img {
        border-radius: 100%;
    }
    .tw-followCard-btn {
        border: 0;
        border-radius: 999px;
        padding: .25rem 1rem;
        font-weight: 800;
        cursor: pointer;
    }
    .tw-followCard-btn:hover {
        background-color: #09f;
        transition: .3s ease background-color;
        color: white;
    }
    .tw-followCard-btn.is-following {
        background-color: #09f;
        color: #fff;
    }
    .tw-followCard-btn.is-following:hover {
        background-color: red;
        color: #fff;
        transition: .3s ease background-color;
    }
`

function TwitterFollowCard({ userName = 'unknown', name }) {

    const [ isFollowing, setIsFollowing ] = useState(false)
    const imageSrc = `https://unavatar.io/${userName}`
    const text = isFollowing ? 'Following' : 'Follow'
    const buttonClassName = isFollowing
        ? 'tw-followCard-btn is-following'
        : 'tw-followCard-btn'

    function handleOnClick(event) {
        event.preventDefault()
        setIsFollowing(!isFollowing)
    }

    return (
        <TwitterFollowCardStyled>
                <header>
                    <img src={imageSrc}  alt="Midudev avatar" width={48} height={48} />
                    <div className='header-body'>
                        <strong>{name}</strong>
                        <span>@{userName}</span>
                    </div>
                </header>
                <aside>
                    <button className={buttonClassName} onClick={handleOnClick}>
                        {text}
                    </button>
                </aside>
        </TwitterFollowCardStyled>
    )
}

export default TwitterFollowCard
