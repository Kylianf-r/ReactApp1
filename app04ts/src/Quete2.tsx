import './App.css';
import psg from './data/data';
import PlayerCard from './components/PlayerCardProps';

export default function Quete2()  {
    const { team, players } = psg;

    return (
        <>
            <h1>
                Quête 2 : Player List
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
