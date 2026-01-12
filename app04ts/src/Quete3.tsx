import './App.css';
import psg from './data/data';
import PlayerCard from './components/PlayerCardProps';

export default function Quete3()  {
    const { team, players } = psg;

    return (
        <>
            <h1>
                Quête 3 : Player List : Forward or Midfielder
            </h1>
            <h1>{team}</h1>
            {players.filter((players) => (players.position === 'Attaquant' || players.position === 'Milieu')).map((players) => (
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
