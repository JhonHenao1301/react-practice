
import '../App.css'

function Header() {
    return (
        <nav className='header'>
            <img src="./logo-blockBuster.svg" alt="Block buster logo" width={20} height={20}/>
            <ul>
                <li>All</li>
                <li>Least valued</li>
                <li>Most valued</li>
            </ul>
            <input type="text" placeholder='Search your favorite movie'/>
        </nav>
    )
}

export default Header
