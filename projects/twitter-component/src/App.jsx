
import TwitterFollowCard from './TwitterFollowCard'

function App() {
    return (
        <section className='App'>
            <TwitterFollowCard userName='midudev' name='Miguel Durán'/>
            <TwitterFollowCard userName='elonmusk' name='Elon Musk' isFollowing={true} />
            <TwitterFollowCard userName='pheralb' name='Pablo Hernandez'/>
            <TwitterFollowCard userName='ronaldo' name='Ronaldo'/>
            <TwitterFollowCard userName='leomessi' name='Lionel Messi'/>
            <TwitterFollowCard userName='elonmusk' name='Elon Musk'/>
        </section>
    )
}

export default App