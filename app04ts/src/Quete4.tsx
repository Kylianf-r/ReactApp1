import './App.css';
import psg from './data/data';
import PlayerCard from './components/PlayerCardProps';

export default function Quete4()  {
    const { team, players } = psg;

    return (
        <>
            <h1>
                Quête 4 : Player List : Goal Machine or not
            </h1>
            <h1>{team}</h1>
            {players.filter((players) => (players.stats ['2025-2026'].goals <= 10)).map((players) => ( 
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
