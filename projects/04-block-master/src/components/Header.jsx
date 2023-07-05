
import styled from 'styled-components'
import Logo from '../icons/BlockBuster-logo'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'

const HeaderStyled = styled.header`
    nav {
        padding-block: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & .actionsNavBarLg {
            display: flex;
            align-items: center;
            gap: 2rem;
            @media(max-width: 780px) {
                display: none;
            }
            & ul {
                display: flex;
                gap: 2rem;
                
                & li {
                list-style: none;
                }
            }
            & input {
                border-radius: .5rem;
                padding: .5rem;
            }
        }
        & .actionsNavBarSm {
            display: flex;
            gap: 2rem;
            @media(min-width: 780px) {
                display: none;
            }
        }
    }
`

function Header() {
    return (
        <HeaderStyled>
            <nav>
                <div className="logo">
                    <Logo width={120} height={68} />
                </div>
                <div className="actionsNavBarLg">
                    <ul>
                        <li>All</li>
                        <li>Least valued</li>
                        <li>Most valued</li>
                    </ul>
                    <input type="text" className='input' placeholder='Search your favorite movie'/>
                </div>
                <div className="actionsNavBarSm">
                    <FontAwesomeIcon icon={faMagnifyingGlass} size='xl' />
                    <FontAwesomeIcon icon={faBars} size='xl' />
                </div>
            </nav>
        </HeaderStyled>
    )
}

export default Header
