import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
    {
        userName: 'eloygplaza',
        name: "Eloy Garcia Plaza",
        isFollowing: true
    },
    {
        userName: 'elonmusk',
        name: "Elon Musk",
        isFollowing: true
    },
    {
        userName: 'saylor',
        name: "Michael Saylor",
        isFollowing: false
    }
]

export function App() {
    const format = (userName) => `@${userName}`;
    
    return (
        <section className='App'>
        {

            users.map(({ userName, name, isFollowing }) => (
                <TwitterFollowCard
                    key={userName}
                    formatUserName={format}
                    initialIsFollowing={isFollowing}
                    userName={userName}
                >
                    {name}   
                </TwitterFollowCard>
            ))
        }
        </section>
    )
}