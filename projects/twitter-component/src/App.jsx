
import TwitterFollowCard from './TwitterFollowCard'

function App() {

    const users = [
        {
            id: 1000,
            userName: 'midudev',
            name: 'Miguel Angel Durán',
            isFollowing: true
        },
        {
            id: 1001,
            userName: 'elonmusk',
            name: 'Elon Musk',
            isFollowing: false
        },
        {
            id: 1002,
            userName: 'ronaldo',
            name: 'Ronaldo aveiro',
            isFollowing: true
        },
        {
            id: 1003,
            userName: 'leomessi',
            name: 'Lionel Messi',
            isFollowing: true
        },
        {
            id: 1004,
            userName: 'jhenao',
            name: 'Jhon Henao',
            isFollowing: false
        },
        {
            id: 1005,
            userName: 'midudev',
            name: 'Miguel Angel Durán',
            isFollowing: true
        }
    ]
    return (
        <section className='App'>
            {
                users.map(user => {
                    const { id, userName, name, isFollowing } = user
                    console.log(isFollowing)
                    return (
                        
                        <TwitterFollowCard
                            key={id}
                            userName={userName}
                            name={name}
                            initialIsFollowing={isFollowing}
                        />
                    )
                })
            }
        </section>
    )
}

export default App