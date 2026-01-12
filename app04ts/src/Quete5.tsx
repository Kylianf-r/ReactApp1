import './App.css';
import psg from './data/data';
import PlayerCard from './components/PlayerCardProps';


export default function Quete5()  {
    const { team, players } = psg;

    return (
        <>
            <h1>
                Quête 5 : Player List : Player Card
            </h1>
            <h1>{team}</h1>
            {players.map((players) => (
                <PlayerCard
                key={players.number}
                name={players.name}
                number={players.number}
                position={players.position}
                ></PlayerCard>
            ))}
        </>
    )
}
